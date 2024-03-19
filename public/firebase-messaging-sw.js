importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
firebase.initializeApp({
    apiKey: "AIzaSyDRsr2aVP19aZ-4BmHJMK4qsGR5LXu8Aq0",
    authDomain: "my-app-fb-90aaf.firebaseapp.com",
    projectId: "my-app-fb-90aaf",
    storageBucket: "my-app-fb-90aaf.appspot.com",
    messagingSenderId: "831795853234",
    appId: "1:831795853234:web:97c2397486b881e16416ab"
  });

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Titulo de la notificación';
//     const notificationOptions = {
//       body: 'Este es el body',
//       icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
// });