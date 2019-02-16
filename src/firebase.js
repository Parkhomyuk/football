import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDG8aveooUDf9BHdGje1LD8IIlW8ccEjGM",
    authDomain: "football-958c0.firebaseapp.com",
    databaseURL: "https://football-958c0.firebaseio.com",
    projectId: "football-958c0",
    storageBucket: "football-958c0.appspot.com",
    messagingSenderId: "994593754734"
};

firebase.initializeApp(config);

const firebaseDB= firebase.database();
const firebaseMatches=firebaseDB.ref('matches');

export {
firebase,
firebaseMatches
}