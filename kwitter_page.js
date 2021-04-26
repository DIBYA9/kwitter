//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;


            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "kwitter_page.html";
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById(" msg").value = "";
}