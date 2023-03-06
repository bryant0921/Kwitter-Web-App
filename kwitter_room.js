
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYkdBe8tSEZuT0KPpZy5XFTigUOqUkryE",
    authDomain: "kwitter-hw-f3b90.firebaseapp.com",
    projectId: "kwitter-hw-f3b90",
    storageBucket: "kwitter-hw-f3b90.appspot.com",
    messagingSenderId: "1073957596753",
    appId: "1:1073957596753:web:cfd0784eeb054f6d75d270",
    measurementId: "G-N41S75N393"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room_names - " + Room_names);
                row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
                document.getElementById("output").innerHTML = row;
                //End code
          });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

