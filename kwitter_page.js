//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDae0BEzIJpZ3ha0YLEuVbjo9Kc8j5Af7w",
      authDomain: "let-s-chat-app-3523d.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-3523d-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-3523d",
      storageBucket: "let-s-chat-app-3523d.appspot.com",
      messagingSenderId: "918015290599",
      appId: "1:918015290599:web:9b12037b3ad4471a474642"
    };
    
    
    firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

 function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}
