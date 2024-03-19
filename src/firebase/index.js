// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

const vapidKey = 'BGDO_L5D1kEdz8zsuCR1413vZMkzY-6IU2S5klqyPE93sdNlY9zwiJNeBSbo-GJ3xiDlD84CXezcIUGAeEHn0ns';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRsr2aVP19aZ-4BmHJMK4qsGR5LXu8Aq0",
  authDomain: "my-app-fb-90aaf.firebaseapp.com",
  projectId: "my-app-fb-90aaf",
  storageBucket: "my-app-fb-90aaf.appspot.com",
  messagingSenderId: "831795853234",
  appId: "1:831795853234:web:97c2397486b881e16416ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, { vapidKey }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    //console.log('currentToken', currentToken);
    sendTokenToServer(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

const sendTokenToServer = token => {
  if (localStorage.getItem('tokenSentToServer')) return;

  console.log('Ha almacenado el token');
  localStorage.setItem('tokenSentToServer', token);
}

export const db = getFirestore(app);