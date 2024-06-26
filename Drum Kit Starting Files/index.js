for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // alert("I got clicked!");
  
    var buttoninnerHTML = this.innerHTML;
    buttonAnimation(buttoninnerHTML);
    switch(buttoninnerHTML){
        case "w": 
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "a": 
        var audioa=new Audio("sounds/kick-bass.mp3");
        audioa.play();
        break;

        case "w": 
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;


        case "s": 
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;


        case "d": 
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "j": 
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "k": 
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "l": 
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        default:
            console.log(buttoninnerHTML);
    }

   
})
}

document.addEventListener("keypress",function(event){
    var innerKey = event.key;
    buttonAnimation(innerKey);
    switch(innerKey){
        case "w": 
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "a": 
        var audioa=new Audio("sounds/kick-bass.mp3");
        audioa.play();
        break;

        case "w": 
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;


        case "s": 
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;


        case "d": 
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "j": 
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "k": 
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "l": 
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        default:
            console.log(innerKey);
    }

   
})

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); // Remove the class after 100 milliseconds
    }
}