/// <reference types="vite/client" />
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const env = (import.meta as any).env || {};

// Default Firebase Configuration with env fallback
const firebaseConfig = {
    apiKey: env.VITE_FIREBASE_API_KEY || "AIzaSyDemoKeyForEduNersProject2026",
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "eduners-app.firebaseapp.com",
    projectId: env.VITE_FIREBASE_PROJECT_ID || "eduners-app",
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "eduners-app.appspot.com",
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
    appId: env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

// Initialize Firebase (singleton pattern)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore database
export const db = getFirestore(app);

// Enable offline persistence if supported
try {
    enableIndexedDbPersistence(db).catch((err) => {
        if (err.code === 'failed-precondition') {
            console.warn('Firestore offline persistence failed: Multiple tabs open');
        } else if (err.code === 'unimplemented') {
            console.warn('Firestore offline persistence is not supported by browser');
        }
    });
} catch (e) {
    // Ignore persistence errors
}

export default app;
