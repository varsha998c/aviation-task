// menubar
function menuFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function myFunction() {
    var x = document.getElementById("visa");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function closeFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function test() {
    let a = document.getElementById("visa");
    let value = a.value;
    let display = document.getElementById("textresult");
    display.value = value;
}
