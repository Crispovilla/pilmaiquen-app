import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcvcbINDkLx129UAfGgfQIA_cmXS_suGQ",
  authDomain: "productos-landing.firebaseapp.com",
  projectId: "productos-landing",
  storageBucket: "productos-landing.appspot.com",
  messagingSenderId: "254337711156",
  appId: "1:254337711156:web:34d95abd30b06a5afd5e61",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
