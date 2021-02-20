import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyD1UHFW5vOV97LWQU7Nv1A_SraOqtIyG8c",
    authDomain: "twitter-spoof.firebaseapp.com",
    projectId: "twitter-spoof",
    storageBucket: "twitter-spoof.appspot.com",
    messagingSenderId: "293940832325",
    appId: "1:293940832325:web:87c83e09b6fa4803279b2c"
};

let fireBase = firebase.initializeApp(config);

export default fireBase;