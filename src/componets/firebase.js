import firebase from 'firebase'

const config ={
    apiKey: "AIzaSyBFAl5n4wO4bzjpXZSHahMnsly7ApAzv0c",
    authDomain: "prayer-times-2b4ba.firebaseapp.com",
    projectId: "prayer-times-2b4ba",
    storageBucket: "prayer-times-2b4ba.appspot.com",
    messagingSenderId: "962515489863",
    appId: "1:962515489863:web:efb3ca79b913c9b6440d62"
}

firebase.initializeApp(config);


export default( firebase)