import { initializeApp } from 'firebase/app';

// Copy this file to firebaseConfig.js and fill in your Firebase project credentials.
// Get them from Firebase Console → Project settings → Your apps.

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "G-XXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);

export default app;
