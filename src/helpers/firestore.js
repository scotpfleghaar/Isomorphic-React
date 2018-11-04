import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBDY2kyANcWweWIqtQLlrBn9_vVsfxPVCs",
    authDomain: "isomorphic-react-75a22.firebaseapp.com",
    databaseURL: "https://isomorphic-react-75a22.firebaseio.com",
    projectId: "isomorphic-react-75a22",
    storageBucket: "isomorphic-react-75a22.appspot.com",
    messagingSenderId: "785454221019"
};
firebase.initializeApp(config);
const db = firebase.firestore();
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

export default db;