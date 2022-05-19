var user = localStorage.getItem("user_name",user_name);
var firebaseConfig = {
  apiKey: "AIzaSyBZ3lPD5K3tbl34_kdkWEsIEuLzQ0tRwIg",
  authDomain: "revvet-3c42d.firebaseapp.com",
  projectId: "revvet-3c42d",
  storageBucket: "revvet-3c42d.appspot.com",
  messagingSenderId: "14484556962",
  appId: "1:14484556962:web:23f474ac435632a1b69bfb",
  measurementId: "G-HNFWYXQCH0"
  };
  function addRoom()
  {
    var room = document.getElementById("room_name");
    localStorage.setItem("room_name", room);
    window.location.href = "room.html";
  }
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_name' id="+room+"onclick='redirectToRoomName(this.id)>#"+room+"</div><hr>";
   });});}
   getData();
