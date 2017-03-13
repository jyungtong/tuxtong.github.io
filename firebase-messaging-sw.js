importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyAX9rRXoE4D2cNFU5Yzd9l7E3Uh2rrrNVk",
  authDomain: "dd-express.firebaseapp.com",
  databaseURL: "https://dd-express.firebaseio.com",
  storageBucket: "dd-express.appspot.com",
  messagingSenderId: "725920478791"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('payload: ', payload);
  const title = 'hello world';
  const options = {
    body: payload.data.status
  };

  return self.registration.showNotification(title, options);
});
