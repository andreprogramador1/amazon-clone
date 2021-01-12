import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8cFk_Fkst6LkKIZivkUL-ajrP8U3W-Ik",
    authDomain: "challenge-d46ba.firebaseapp.com",
    projectId: "challenge-d46ba",
    storageBucket: "challenge-d46ba.appspot.com",
    messagingSenderId: "334555648246",
    appId: "1:334555648246:web:3715891c8fbc6692039cd7",
    measurementId: "G-7Z8HVV7V5D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }