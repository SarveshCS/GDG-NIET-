import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // Add your Firebase config here
    apiKey: "AIzaSyB8VEyLdTc9iogM2WmEG3sGQbj5kLLIxM8",
    authDomain: "gdg-web-3558f.firebaseapp.com",
    projectId: "gdg-web-3558f",
    storageBucket: "gdg-web-3558f.firebasestorage.app",
    messagingSenderId: "1053141175000",
    appId: "1:1053141175000:web:212d15c4fc75a0403065ad"
};

let db = null;

try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Error initializing Firebase:', error);
    // db remains null as fallback to prevent app crashes
}

export { db }; 