import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Basic security and parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Health check endpoint
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Dedicated Robots.txt Route - Guaranteed 200 OK & text/plain
  app.get('/robots.txt', (req, res) => {
    const candidates = [
      path.join(process.cwd(), 'dist', 'robots.txt'),
      path.join(process.cwd(), 'public', 'robots.txt'),
    ];
    let filePath = candidates.find((p) => fs.existsSync(p));
    if (!filePath) {
      filePath = path.join(process.cwd(), 'public', 'robots.txt');
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.status(200).sendFile(filePath);
  });

  // Dedicated Sitemap.xml Route - Guaranteed 200 OK & application/xml
  app.get('/sitemap.xml', (req, res) => {
    const candidates = [
      path.join(process.cwd(), 'dist', 'sitemap.xml'),
      path.join(process.cwd(), 'public', 'sitemap.xml'),
    ];
    let filePath = candidates.find((p) => fs.existsSync(p));
    if (!filePath) {
      filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
    }

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.status(200).sendFile(filePath);
  });

  // Development vs Production Serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Serve static files from dist
    app.use(express.static(distPath, {
      index: false,
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.xml')) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        } else if (filePath.endsWith('.txt')) {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        }
      }
    }));

    // SPA Fallback: serve index.html for page routes only
    app.get('*', (req, res) => {
      // Do not return index.html for missing file assets with extensions (.xml, .txt, .json, .js, .css, .png, etc.)
      if (/\.[a-zA-Z0-9]+$/.test(req.path)) {
        return res.status(404).send('Not Found');
      }
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Researcho Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
