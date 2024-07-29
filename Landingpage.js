if (localStorage.getItem("name") && localStorage.getItem("email")) {
    document.getElementById("profileLink").style.display = "block";
} else {
    document.getElementById("profileLink").style.display = "none";
}


const foodlist=["pizza","cafe-latte","mojito"]


function searchinf(){
    const abc=document.getElementById("search-item").value.toLowerCase();
    if(abc==foodlist[0]){
        window.location.href="Recipe1.html";
    }
    else if(abc==foodlist[1]){
        window.location.href="Recipe2.html";
    }
    else if(abc==foodlist[2]){
        window.location.href="Recipe3.html";
    }
    else{
        alert("No Such Recipe");
    }
}