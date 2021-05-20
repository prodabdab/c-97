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

//ADD YOUR FIREBASE LINKS

function AddUser() {
    user_add= document.getElementById("user2name").value;
    firebase.database().ref("/").child(user_add).update({
        purpose:"addinguser"
    });

}