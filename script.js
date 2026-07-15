window.onload = function(){

    alert("Welcome to Francheska Nicole Aguil's Portfolio!");

    document.getElementById("title").innerHTML =
    "Welcome to My Portfolio";

    document.getElementById("title").style.color = "darkred";
    document.getElementById("title").style.fontSize = "45px";

    console.log("Portfolio Loaded Successfully!");
}

function changeTheme(){

    document.body.classList.toggle("dark-mode");

    console.log("Theme Changed");
}

function showInfo(){

    alert(
        "Name: Francheska Nicole Aguil\n\n"+
        "Course: Bachelor of Science in Information Technology\n\n"+
        "Position: Web Developer\n\n"+
        "Email: example@gmail.com\n\n"+
        "Phone: 09364738671"
    );

    console.log("Information Displayed");
}