import firebase from "firebase";
require("@firebase/firestore");



const firebaseConfig = {
  apiKey: "AIzaSyAbNqVGa1QFZ83JNg5J63yLSdFjGropACM",
  authDomain: "e-ride-8bbd8.firebaseapp.com",
  databaseURL: "https://e-ride-8bbd8-default-rtdb.firebaseio.com",
  projectId: "e-ride-8bbd8",
  storageBucket: "e-ride-8bbd8.appspot.com",
  messagingSenderId: "902776500493",
  appId: "1:902776500493:web:1b19d653f62669e2f80044"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
