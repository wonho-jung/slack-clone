import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzLh1g9eJdpIP_NT5Zh6hvCfbPZ19eSLA",
  authDomain: "slack-clone-6f504.firebaseapp.com",
  projectId: "slack-clone-6f504",
  storageBucket: "slack-clone-6f504.appspot.com",
  messagingSenderId: "276850236945",
  appId: "1:276850236945:web:ebe3d358a0d6ae89bb5bb0",
  measurementId: "G-S0N5S1DQVR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
