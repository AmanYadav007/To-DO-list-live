
var firebaseConfig = {
    apiKey: "AIzaSyAu4fwkriEKV57sHy94zlyCy3VVSw1FAYw",
    authDomain: "to-do-list-85f8c.firebaseapp.com",
    projectId: "to-do-list-85f8c",
    storageBucket: "to-do-list-85f8c.appspot.com",
    messagingSenderId: "863225390094",
    appId: "1:863225390094:web:73bc5d2a6b55f6adbe485f",
    measurementId: "G-M3W0E2L12P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();