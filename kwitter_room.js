//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDiQwS_Hyyf6qMTvHFKa49wwxHCogQYleQ",
    authDomain: "kwitter-24c96.firebaseapp.com",
    databaseURL: "https://kwitter-24c96-default-rtdb.firebaseio.com",
    projectId: "kwitter-24c96",
    storageBucket: "kwitter-24c96.appspot.com",
    messagingSenderId: "452185348697",
    appId: "1:452185348697:web:f5506ce891d5dbc16e6f48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();