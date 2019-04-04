import firebase from 'firebase/app';
import 'firebase/storage'

let config = {
    apiKey: "AIzaSyBksmjb-v-gdGtya2FJ_w2zxXWl7F4AzsU",
    authDomain: "portfolio-f92e5.firebaseapp.com",
    databaseURL: "https://portfolio-f92e5.firebaseio.com",
    projectId: "portfolio-f92e5",
    storageBucket: "portfolio-f92e5.appspot.com",
    messagingSenderId: "1064548059307"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {storage, firebase as default}