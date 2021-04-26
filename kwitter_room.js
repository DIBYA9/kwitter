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

function addroom() {
    room_name = document.getElementById("Room").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_room.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            message_data = childData;
            //Start code
            console.log("room name -" + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;


            console.log(Room_names);
            console.log(message_data);
            name = message_data['name'];
            message = message_data['message'];
            like = message_data['like'];
            name_with_tag = "<h4>" + name + "<img src='tick.png'></h4>"
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            like_button = "<button class='btn btn-warning' id=" + Room_names + " value=" + like + " onclick='updatelike()'>"


            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}