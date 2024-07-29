function myfunc(event){
    event.preventDefault();

    var rname = document.getElementById("recipeName").value;
    var ingname = document.getElementById("ingredients").value;
    var insname = document.getElementById("instructions").value;
    var time = document.getElementById("cookingTime").value;

    localStorage.setItem("recipename", rname);
    localStorage.setItem("ingredients", ingname);
    localStorage.setItem("instruction", insname);
    localStorage.setItem("time", time);

    document.getElementById("recipeName").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
    document.getElementById("cookingTime").value = "";

    alert("Form Submitted Successfully");
    window.location.href="ProfilePage.Html";
}
