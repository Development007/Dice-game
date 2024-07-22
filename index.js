function imageclick(){
    var randomNumber1 = Math.random();
    var randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    document.getElementById("img1").src="images/dice" +randomNumber1 + ".png";
    var randomNumber2 = Math.random();
    var randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    document.getElementById("img2").src="images/dice" +randomNumber2 + ".png";
    if (randomNumber1>randomNumber2){
        document.getElementById("winners").innerText=" 🚩 player 1 win"
    }
    else if (randomNumber2>randomNumber1){
        document.getElementById("winners").innerText=" 🚩 player 2 win"
    }
    else{
        document.getElementById("winners").innerText="Draw"
    }
}

window.onload=imageclick;
