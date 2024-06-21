var randomNo1= Math.floor(Math.random()*7);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNo1 + ".png");

var randomNo2= Math.floor(Math.random()*7);
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNo2 + ".png");

if(randomNo1 == randomNo2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw";
} else if(randomNo1 > randomNo2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins";
}
