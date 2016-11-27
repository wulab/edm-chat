// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
  apiKey: "AIzaSyDt9P1yrOOt5IDsNuubyuU_OTPPBe6cGpI",
  authDomain: "edm-chat.firebaseapp.com",
  databaseURL: "https://edm-chat.firebaseio.com",
  storageBucket: "edm-chat.appspot.com",
  messagingSenderId: "95492685875"
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
var messaging = firebase.messaging();
