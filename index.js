const images={
    "img1":"Assets/Java.png",
    "img2":"Assets/SB.png",
    "img3":"Assets/React.png",
    "img4":"Assets/HTML.png",
    "img5":"Assets/CSS.png",
    "img6":"Assets/JavaScript.png",
    "img7":"Assets/SQL.png",
    "img8":"Assets/PLSQL.png",
    "img9":"Assets/B5.png",
    "img10":"Assets/MySQL.png",
    "img11":"Assets/Jdbc.png",

}

function readMore1() {
    let moreText = document.getElementById("moreText1");
    let readBtn = document.getElementById("readBtn1");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readBtn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        readBtn.innerHTML = "Read More";
    }
}

function readMore2() {
    let moreText = document.getElementById("moreText2");
    let readBtn = document.getElementById("readBtn2");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readBtn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        readBtn.innerHTML = "Read More";
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Message submitted successfully!");

    this.reset();

});