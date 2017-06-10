import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDuQH6cdtpOEE1yWTXxy6lmI3xrj4RuSl8",
    authDomain: "octorusty-to-do.firebaseapp.com",
    databaseURL: "https://octorusty-to-do.firebaseio.com",
    projectId: "octorusty-to-do",
    storageBucket: "octorusty-to-do.appspot.com",
    messagingSenderId: "253180539313"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var fb = firebase.database().ref();
export default firebase;
