import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBxMURyVqPsZ65H6lMduz1zkgwQQUwKICA",
    authDomain: "bayes-feed.firebaseapp.com",
    projectId: "bayes-feed",
    storageBucket: "bayes-feed.appspot.com",
    messagingSenderId: "607907142768",
    appId: "1:607907142768:web:0effe3a1765a562719a8b5",
    measurementId: "G-X1CS8NV3TS"
};

const app = initializeApp(firebaseConfig);

export default app;