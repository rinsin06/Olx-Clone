import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHQZMmD9iLukUv5kAP2mDklCV0xIq7WAg",
    authDomain: "olx-app-f855d.firebaseapp.com",
    projectId: "olx-app-f855d",
    storageBucket: "olx-app-f855d.appspot.com",
    messagingSenderId: "167397081850",
    appId: "1:167397081850:web:be0686c7c3334f338cff43",
    measurementId: "G-2N6BTQCMF5"
  };

 export default firebase.initializeApp(firebaseConfig)