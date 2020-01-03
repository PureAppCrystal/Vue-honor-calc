import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCT3Dd4RlQpL1xcS8Ums2s5kXOuiBpTqC0",
    authDomain: "honor-calc.firebaseapp.com",
    databaseURL: "https://honor-calc.firebaseio.com",
    projectId: "honor-calc",
    storageBucket: "honor-calc.appspot.com",
    messagingSenderId: "1089877459357",
    appId: "1:1089877459357:web:d4cf2878b38bccd2d9af74",
    measurementId: "G-Q6JV17TD5H"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;