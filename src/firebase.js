import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAXrWsgY9ngAgQ5DlWcogu3b_6MhWEJEU",
    authDomain: "tinder-clone-24166.firebaseapp.com",
    databaseURL: "https://tinder-clone-24166.firebaseio.com",
    projectId: "tinder-clone-24166",
    storageBucket: "tinder-clone-24166.appspot.com",
    messagingSenderId: "659854871711",
    appId: "1:659854871711:web:696b00dde3326a98f926aa",
    measurementId: "G-14KHWWT77S"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;