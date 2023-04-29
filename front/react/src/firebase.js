// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqEUqcDS3gVdtVWzidzl8c1IsIpbqReZA",
  authDomain: "nure-masters-diploma-c04c7.firebaseapp.com",
  projectId: "nure-masters-diploma-c04c7",
  storageBucket: "nure-masters-diploma-c04c7.appspot.com",
  messagingSenderId: "160731000935",
  appId: "1:160731000935:web:420874a1075a0ee37664c2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

initializeApp(firebaseConfig);
export const db = getFirestore();

export const taskCollection = collection(db, "tasks");

export async function getTasks(myCollection) {
  try {
    const snapshot = await getDocs(myCollection);
    let taskArr = [];
    snapshot.docs.forEach((doc) => {
      taskArr.push({ ...doc.data(), id: doc.id });
    });
    return taskArr;
  } catch (error) {
    console.error(error);
    return [];
  }
}
