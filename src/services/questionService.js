import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
import db from "./firebase.js";

const questions = collection(db, "questions");

export const getAll = () => questions;

export const getRandomQuestion = async () => {
  const size = (await getDocs(questions)).size;
  const randomIndex = Math.floor(Math.random() * size);
  const question = (await getDocs(questions)).docs[randomIndex];

  return { id: question.id, ...question.data() };
};

export const add = (text, followUps = []) =>
  addDoc(questions, { text, upvotes: 0, downvotes: 0, followUps });

export const editText = async ({ text, id }) =>
  await updateDoc(doc(questions, id), { text });

export const addFollowUp = async ({ id }, followUp) => {
  const newFollowUps = (await getDoc(questions, id)).data().followUps;
  newFollowUps.push(followUp);

  return await updateDoc(doc(questions, id), { followUps: newFollowUps });
};

export const remove = ({ id }) => deleteDoc(doc(questions, id));

export const upvote = async (questionId) => {
  const upvotes = (await getDoc(doc(questions, questionId))).data().upvotes + 1;

  return await updateDoc(doc(questions, questionId), {
    upvotes,
  });
};

export const downvote = async (questionId) => {
  const downvotes =
    (await getDoc(doc(questions, questionId))).data().downvotes + 1;

  return await updateDoc(doc(questions, questionId), {
    downvotes,
  });
};
