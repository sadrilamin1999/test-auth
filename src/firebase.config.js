import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC16yhiNtUHaKCLu7K_nRaLKD-5n_7fdPU",
  authDomain: "test-auth-c4430.firebaseapp.com",
  projectId: "test-auth-c4430",
  storageBucket: "test-auth-c4430.appspot.com",
  messagingSenderId: "1016378293051",
  appId: "1:1016378293051:web:fc020b390d867782a4551e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
