import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKYodmDo0xzcqS8R09p_stL7yZeeeRftc",
    authDomain: "news-app-c3d5a.firebaseapp.com",
    projectId: "news-app-c3d5a",
    storageBucket: "news-app-c3d5a.appspot.com",
    messagingSenderId: "787081636140",
    appId: "1:787081636140:web:f18351bacec8cfffc8e489",
    measurementId: "G-J6Y8K6688B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db};