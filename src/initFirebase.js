import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyDiMeWHmaUhxTJ_OFLK8NINDt5vm9wzFGo",

    authDomain: "database-2-402823.firebaseapp.com",

    databaseURL: "https://database-2-402823-default-rtdb.firebaseio.com",

    projectId: "database-2-402823",

    storageBucket: "database-2-402823.appspot.com",

    messagingSenderId: "827992131376",

    appId: "1:827992131376:web:5c781a7059a3d8751a2af5",

    measurementId: "G-9P1059T58M"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();
