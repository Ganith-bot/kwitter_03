var firebaseConfig = {
    apiKey: "AIzaSyCg-IVPtcFTTiyypJ_S6nZcYOjObCfBymA",
    authDomain: "kwitter-5e3ef.firebaseapp.com",
    databaseURL: "https://kwitter-5e3ef-default-rtdb.firebaseio.com",
    projectId: "kwitter-5e3ef",
    storageBucket: "kwitter-5e3ef.appspot.com",
    messagingSenderId: "561505273610",
    appId: "1:561505273610:web:79d8a0ec1c60608f071cf3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_19 = localStorage.getItem("user_name");
  room_19 = localStorage.getItem("room_tag");
function logout1(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_tag");
    window.location="index.html";
}

function send_msg(){
    msg19 = document.getElementById("msg_by_user").value;
    firebase.database().ref(room_19).push({
name:user_19,message:msg19,like:0
    });
    document.getElementById("msg_by_user").value = "";
}