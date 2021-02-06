import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB-zo2eOACPzGXfr7pCW1hanLd6ZyTJ_jE",
  authDomain: "pokemon-game-349e5.firebaseapp.com",
  databaseURL: "https://pokemon-game-349e5-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-349e5",
  storageBucket: "pokemon-game-349e5.appspot.com",
  messagingSenderId: "289128434674",
  appId: "1:289128434674:web:d70f6b59496fc98862b96b"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;