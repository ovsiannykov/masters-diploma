import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDqEUqcDS3gVdtVWzidzl8c1IsIpbqReZA',
  authDomain: 'nure-masters-diploma-c04c7.firebaseapp.com',
  projectId: 'nure-masters-diploma-c04c7',
  storageBucket: 'nure-masters-diploma-c04c7.appspot.com',
  messagingSenderId: '160731000935',
  appId: '1:160731000935:web:aa2b87124e2521d87664c2'
}

initializeApp(firebaseConfig)
const db = getFirestore()

export const taskCollection = collection(db, 'tasks')
