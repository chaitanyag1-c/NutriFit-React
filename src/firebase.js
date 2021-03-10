import firebase from 'firebase'
const config={
    apiKey: "AIzaSyCrVyh43blL5ndBCATDgw_uDwe6TIk1jQ0",
    authDomain: "dada-38b15.firebaseapp.com",
    projectId: "dada-38b15",
    storageBucket: "dada-38b15.appspot.com",
    messagingSenderId: "992129165836",
    appId: "1:992129165836:web:4c3e4264923ca0020e1c29"
}
// firebase.initialzeApp(config);
firebase.initializeApp(config);
export default firebase