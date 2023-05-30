import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBGXYsj6n1rtYZPGgABawMw3phrWaK1J7Y",
    authDomain: "biblioteca-6b855.firebaseapp.com",
    projectId: "biblioteca-6b855",
    storageBucket: "biblioteca-6b855.appspot.com",
    messagingSenderId: "792908406773",
    appId: "1:792908406773:web:d3f74fd66eef5b712d8abc"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();