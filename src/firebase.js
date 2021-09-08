import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXpzmTmm_VpbQTFBzLCTYHnhL-9oDWBlQ",
  authDomain: "whatsappclonereact-45d95.firebaseapp.com",
  projectId: "whatsappclonereact-45d95",
  storageBucket: "whatsappclonereact-45d95.appspot.com",
  messagingSenderId: "475442122824",
  appId: "1:475442122824:web:3c23411ed7b8b05ab9087d",
  measurementId: "G-WFSPXG4GQP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
