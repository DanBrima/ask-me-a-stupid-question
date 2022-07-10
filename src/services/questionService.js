import db from "./firebase.js";

const questions = db.collection("questions");

export const getAll = () => questions;

export const getRandomQuestion = async () => {
  const size = (await questions.get()).size;
  const randomIndex = Math.floor(Math.random() * size);

  return await (await questions.get()).docs[randomIndex].data();
};

export const add = (text, followUps = []) =>
  questions.add({ text, upvotes: 0, downvotes: 0, followUps });

export const editText = async ({ text, id }) =>
  await questions.doc(id).update({ text });

export const addFollowUp = async ({ id }, followUp) => {
  const newFollowUps = (await (await questions.doc(id).get()).data()).followUps;
  newFollowUps.push(followUp);
  return await questions.doc(id).update({ followUps: newFollowUps });
};

export const remove = ({ id }) => questions.doc(id).delete();

export const upvote = async ({ id }) => {
  const upvotes = (await (await questions.doc(id).get()).data()).upvotes + 1;

  return questions.doc(id).update({
    upvotes,
  });
};

export const downvote = async ({ id }) => {
  const downvotes =
    (await (await questions.doc(id).get()).data()).downvotes + 1;

  return questions.doc(id).update({
    downvotes,
  });
};
