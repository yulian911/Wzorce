 import firebase from 'firebase'
 
 export const firebaseConfig = {
    apiKey: "AIzaSyCxOdSABsSY67nCGxtkolIMCuFO0fovRP4",
    authDomain: "react-base-c12df.firebaseapp.com",
    databaseURL: "https://react-base-c12df-default-rtdb.firebaseio.com",
    projectId: "react-base-c12df",
    storageBucket: "react-base-c12df.appspot.com",
    messagingSenderId: "1061402824537",
    appId: "1:1061402824537:web:b295ff709d64bc9beb4648"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider =new firebase.auth.GoogleAuthProvider()

  export{auth ,provider}