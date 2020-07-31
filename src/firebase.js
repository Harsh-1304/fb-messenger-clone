import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {   
        apiKey: "AIzaSyC-08--_zlyLXXSIHZTPuyoJ8LhK6pw4cg",
        authDomain: "fb-messenger-clone-hd1304.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-hd1304.firebaseio.com",
        projectId: "fb-messenger-clone-hd1304",
        storageBucket: "fb-messenger-clone-hd1304.appspot.com",
        messagingSenderId: "838993261785",
        appId: "1:838993261785:web:b432b23474098f89c57ac8",
        measurementId: "G-X27QN818LM"
    });

const db = firebaseApp.firestore();

export default db;