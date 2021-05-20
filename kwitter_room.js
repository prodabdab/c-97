
var firebaseConfig = {
      apiKey: "AIzaSyDs-sp97c_ePGt21SlXzBGAhhFgPMzzvE4",
      authDomain: "kwitter-376f2.firebaseapp.com",
      databaseURL: "https://kwitter-376f2-default-rtdb.firebaseio.com",
      projectId: "kwitter-376f2",
      storageBucket: "kwitter-376f2.appspot.com",
      messagingSenderId: "72847565131",
      appId: "1:72847565131:web:681104a2fb58f7103f48ce"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   

username=localStorage.getItem("Userame_of_the_prson_KK");
document.getElementById('welcome_lable').innerHTML=username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log(Room_names);
          row = "<div class='Room_name_created' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
          document.getElementById("output").innerHTML += row;
      //End cod
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function Button_Logout() {
      localStorage.removeItem("Userame_of_the_prson_KK");
      window.location="Login_of_kwitter.html";
      localStorage.removeItem("room_name");
}

function Room_Created_Buton() {
      room_add= document.getElementById("Room_name_created").value;
      firebase.database().ref("/").child(room_add).update({
          purpose:"addingroom_name"
      });
      localStorage.setItem("room_name" , room_add);
      window.location="kwitter_page.html";
}
