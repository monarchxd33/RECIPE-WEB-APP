function saveData(){
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;

    let user_record = JSON.parse(localStorage.getItem("users")) || [];

    if (user_record.some((v) => v.email == email && v.password == password)) {
        let current_user = user_record.find((v) => v.email == email && v.password == password);

        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);

        alert("Logged in Successfully");
        // window.location.href="Landingpage.html";
    } else {
        alert("Invalid Password or Email Id");
    }
}
