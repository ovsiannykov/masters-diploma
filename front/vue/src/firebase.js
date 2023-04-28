import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDqEUqcDS3gVdtVWzidzl8c1IsIpbqReZA',
  authDomain: 'nure-masters-diploma-c04c7.firebaseapp.com',
  projectId: 'nure-masters-diploma-c04c7',
  storageBucket: 'nure-masters-diploma-c04c7.appspot.com',
  messagingSenderId: '160731000935',
  appId: '1:160731000935:web:aa2b87124e2521d87664c2'
}

initializeApp(firebaseConfig)
export const db = getFirestore()

export const taskCollection = collection(db, 'tasks')

// export async function getTasks(myCollection) {
//   let result = []
//   try {
//     const responce = await getDocs(myCollection)

//     await responce.docs.map((doc) => {
//       result.push({ ...doc.data(), id: doc.id })
//     })

//     return result
//   } catch (error) {
//     console.log(error)
//     return []
//   }
// }

export async function getTasks(myCollection) {
  try {
    const snapshot = await getDocs(myCollection)
    let taskArr = []
    snapshot.docs.forEach((doc) => {
      taskArr.push({ ...doc.data(), id: doc.id })
    })
    return taskArr
  } catch (error) {
    console.error(error)
    return []
  }
}
