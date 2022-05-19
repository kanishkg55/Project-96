var firebaseConfig = {
    apiKey: "AIzaSyBZ3lPD5K3tbl34_kdkWEsIEuLzQ0tRwIg",
    authDomain: "revvet-3c42d.firebaseapp.com",
    projectId: "revvet-3c42d",
    storageBucket: "revvet-3c42d.appspot.com",
    messagingSenderId: "14484556962",
    appId: "1:14484556962:web:23f474ac435632a1b69bfb",
    measurementId: "G-HNFWYXQCH0"
};

var user_name = localStorage.getItem("user_name",user_name);
var room_name = localStorage.getItem("room_name",room_name);

firebaseConfig.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});

document.getElementById("title").innerHTML = "Room Name: "+room_name;