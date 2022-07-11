import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCg2FRg7CESDZtYS3RbaJhxyVPhldmkTU",
  authDomain: "ask-me-a-stupid-question.firebaseapp.com",
  projectId: "ask-me-a-stupid-question",
  storageBucket: "ask-me-a-stupid-question.appspot.com",
  messagingSenderId: "746408578176",
  appId: "1:746408578176:web:8dda04dccc0c2eec152a65",
  measurementId: "G-M237LTRYPW",
};

const app = initializeApp(firebaseConfig);

export default getFirestore(app);
