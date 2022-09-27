import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCfFsyY_fjBIjn9Igee8vEIGNwghV39LR8",
  authDomain: "authapp-a9946.firebaseapp.com",
  projectId: "authapp-a9946",
  storageBucket: "authapp-a9946.appspot.com",
  messagingSenderId: "208692451994",
  appId: "1:208692451994:web:57d4f8d4e9fafc16669d23",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

// const analytics = firebase.analytics();

export default fire;
