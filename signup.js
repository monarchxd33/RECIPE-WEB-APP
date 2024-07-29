function saveData() {
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    // console.log("Input values:", name, email, password);

    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    // console.log("User records from local storage:", user_records);

    if (user_records.some((v) => {
        return v.email === email;
    })) {
        alert("User Already Exists!");
    } else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password
        });
        
        localStorage.setItem("users", JSON.stringify(user_records));

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        alert("User registered successfully!");
        window.location.href="LoginPage.html";

    }
}
