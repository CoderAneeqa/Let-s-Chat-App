
//ADD YOUR FIREBASE LINKS HERE
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
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

     function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room name"
      });

      localStorage.setItem(room_name, "room_name");
      window.location= "Kwitter_page.html";
     }
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name -", Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      
      });});}
getData();

function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="Kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}