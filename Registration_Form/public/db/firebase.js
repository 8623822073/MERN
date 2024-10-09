
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPd-ctKbHBkw7tD2lDg-kFXCbGalSvQSI",
    authDomain: "loginpage-ca66b.firebaseapp.com",
    projectId: "loginpage-ca66b",
    storageBucket: "loginpage-ca66b.appspot.com",
    messagingSenderId: "1044767019395",
    appId: "1:1044767019395:web:edeac7eb849781f44026b6",
    measurementId: "G-MM53WKWLSH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
