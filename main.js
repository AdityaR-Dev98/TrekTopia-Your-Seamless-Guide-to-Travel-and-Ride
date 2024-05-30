// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "--",
  authDomain: "trektopia1-592bb.firebaseapp.com",
  databaseURL: "https://trektopia1-592bb-default-rtdb.firebaseio.com",
  projectId: "trektopia1-592bb",
  storageBucket: "trektopia1-592bb.appspot.com",
  messagingSenderId: "772956089791",
  appId: "1:772956089791:web:2de8e594bf8ce9c8bf050a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

var email = document.getElementById('emailid')
var pass = document.getElementById('password')

window.signup = function (e) {
  e.preventDefault()
  var obj = {
    email: email.value,
    password: pass.value
  }
  createUserWithEmailAndPassword(auth, obj.email,obj.password)
  .then(function (success) {
    alert("Login Success")
  })
  .catch(function (err) {
    alert("error"+ err)
  })
  console.log(obj)
}
