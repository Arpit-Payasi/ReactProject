// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIdTM4a2qYcao-1NnWFPSyvCsNQzsfHx8",
  authDomain: "my-app-90b75.firebaseapp.com",
  projectId: "my-app-90b75",
  storageBucket: "my-app-90b75.firebasestorage.app",
  messagingSenderId: "745240895910",
  appId: "1:745240895910:web:6ac70c986de2c6985aaf67",
  measurementId: "G-X9YJDC4HRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;