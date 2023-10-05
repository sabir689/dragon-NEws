// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKS_wg1QfMPWqk8sCh5seQnz3XGxFEhLI",
  authDomain: "dragon-news-project-91535.firebaseapp.com",
  projectId: "dragon-news-project-91535",
  storageBucket: "dragon-news-project-91535.appspot.com",
  messagingSenderId: "1046207812615",
  appId: "1:1046207812615:web:9fb43b693534487948c6a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;