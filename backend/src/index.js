import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbKJ_r4CfHDigiEZRbiJDha3Wuy0L7weQ",
    authDomain: "traintogether-cf843.firebaseapp.com",
    projectId: "traintogether-cf843",
    storageBucket: "traintogether-cf843.appspot.com",
    messagingSenderId: "389981484079",
    appId: "1:389981484079:web:40c26ecfd78bd6382e82da"
  };

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'User')

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let User = []
    snapshot.docs.forEach((doc) => {
        User.push({ ...doc.data(), id: doc.id })
    })
    console.log(User)
  })
  .catch(err => {
    console.log(err.message)
  })