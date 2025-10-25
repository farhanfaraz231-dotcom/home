let sign = () =>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email.length == 0 || password.length == 0){
        alert("Please fill the form ....!");
    }
    else{
        // alert("user registered successfully ...!")

        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("user registered successfully ...!")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage + errorCode);
  });

    }
}