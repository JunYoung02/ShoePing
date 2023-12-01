// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from 'firebase/storage';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDeC2g8BjgUbAL3mCHkKiTbGrtz4xm4hiI',
  authDomain: 'shoeping-79ca9.firebaseapp.com',
  projectId: 'shoeping-79ca9',
  storageBucket: 'shoeping-79ca9.appspot.com',
  messagingSenderId: '912782373369',
  appId: '1:912782373369:web:9d1972ef8cc2554d168d28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);
