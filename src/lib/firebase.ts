import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2wZKL2JVdAxHHyrosWn7GvzOX529Ycio",
  authDomain: "lofty-forge-cc9s2.firebaseapp.com",
  projectId: "lofty-forge-cc9s2",
  storageBucket: "lofty-forge-cc9s2.firebasestorage.app",
  messagingSenderId: "708618654153",
  appId: "1:708618654153:web:f7f15b3360dad8b37ad818"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const databaseId = "ai-studio-researchobyiitia-4111cf28-35ba-4434-a272-e61f5dc2a8e7";

let firestoreInstance;
try {
  firestoreInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
  }, databaseId);
} catch {
  firestoreInstance = getFirestore(app, databaseId);
}

export const db = firestoreInstance;
