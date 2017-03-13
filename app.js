// Initialize Firebase
var config = {
  apiKey: "AIzaSyAX9rRXoE4D2cNFU5Yzd9l7E3Uh2rrrNVk",
  authDomain: "dd-express.firebaseapp.com",
  databaseURL: "https://dd-express.firebaseio.com",
  storageBucket: "dd-express.appspot.com",
  messagingSenderId: "725920478791"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission()
  .then(function() {
    console.log('Have permission');
    return messaging.getToken();
  })
  .then(function(token) {
    console.log(token);
  })
  .catch(function(err) {
    console.log('Error occured');
    console.log(err);
  });

messaging.onMessage(function(payload) {
  console.log('onMessage: ', payload);
});
