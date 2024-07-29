var storedName = localStorage.getItem("name");
var storedEmail = localStorage.getItem("email");

document.getElementById("name").textContent = storedName;
document.getElementById("email").textContent = storedEmail;

var recname=localStorage.getItem("recipename");
var recing=localStorage.getItem("ingredients");
var recins=localStorage.getItem("instructions");
var rectime=localStorage.getItem("time");

document.getElementById("rn").textContent="Recipe Name: "+recname;
document.getElementById("ing").textContent="Instructions: "+recing;
document.getElementById("ins").textContent="Ingredients: "+recins;
document.getElementById("rct").textContent="Timimg: "+rectime;

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href="LoginPage.html";
}
