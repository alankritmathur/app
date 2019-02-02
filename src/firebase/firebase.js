import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAnaA8FjxHE6YxQNMjEYiTj68YIYzHvb-w",
    authDomain: "expensify-490f3.firebaseapp.com",
    databaseURL: "https://expensify-490f3.firebaseio.com",
    projectId: "expensify-490f3",
    storageBucket: "expensify-490f3.appspot.com",
    messagingSenderId: "851444864941"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };