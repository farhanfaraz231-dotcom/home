let landing = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cnic = document.getElementById("cnic").value;

    if(name === "" || email === "" || password === "" || cnic === "") {
        alert("Please fill all the fields.");
    }
    else{
        // alert(" registered successfully");
        let user = db . collection("users").doc();
        let obj={
            name:name,
            email:email,
            password:password,
            cnic:cnic,
            date:Date()
        }

        user.set(obj)
        alert(" registered successfully");``



    }

    
}
