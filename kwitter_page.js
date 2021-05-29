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
 
    username=localStorage.getItem('Userame_of_the_prson_KK');
    room_name=localStorage.getItem('room_name');

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
          
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'] ;
       name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
       message_with_tag = "<h4>" + message + "</h4>";
       like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
       row = name_with_tag + message_with_tag + like_button  + span_with_tag;
       document.getElementById('output').innerHTML += row;
      } });  }); }


function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:msg,
            name:username,
            like:0
      });   
      document.getElementById("msg").value="";
}
function logout() {
      localStorage.removeItem('Userame_of_the_prson_KK');
      localStorage.removeItem('room_name')
      window.location="Login_of_kwitter.html";
}
function updateLike(message_id) {
      console.log(message_id);
      button_id = message_id ;
      likes= document.getElementById(button_id).value;
      updatelikes=Number(likes)+1;
      console.log(updatelikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      });
}
getData();

