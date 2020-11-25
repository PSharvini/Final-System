//import firebase
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBHPBAKg_T84F75fCYLtZrMEKmEkBKkR0o",
  authDomain: "final-project-667b7.firebaseapp.com",
  databaseURL: "https://final-project-667b7.firebaseio.com",
  projectId: "final-project-667b7",
  storageBucket: "final-project-667b7.appspot.com",
  messagingSenderId: "291422509204",
  appId: "1:291422509204:web:4547631b485b78d501fc81",
  measurementId: "G-K09V8MXCV4"
};

//initial the firebase
  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;