// document.addEventListener
// ("DOMContentLoaded", function ()
//  {
//    var drums = document.querySelectorAll(".drum");
//    for (var index = 0; index < drums.length; index++) 
//    {
//      drums[index].addEventListener
//      ("click",function()
//        {
//          onClick(drums[index]);

//        }
//      );  
//    } 
//   }
// );            

function onClick(element) {
  var buttonClicked = element.innerHTML;
  console.log(buttonClicked);
}


// DETECTING MOUSE PRESSES


document.addEventListener
("DOMContentLoaded", function () 
  {
     var drums = document.querySelectorAll(".drum");
     for (var index = 0; index < drums.length; index++) 
    {
       drums[index].addEventListener
       ("click",function()
         {
          var button=this.innerHTML;
          onClick(button);
          activeAnimation(button);

         }
       );
    
    }
  }
);

function onClick(element) {
  var buttonClicked = element;

  switch (buttonClicked) {
    case "w":var audio= new Audio("sounds/tom-1.mp3"); audio.play();  break;
    case "d":var audio= new Audio("sounds/tom-2.mp3"); audio.play();  break;
    case "a":var audio= new Audio("sounds/tom-3.mp3"); audio.play();  break;
    case "s":var audio= new Audio("sounds/tom-4.mp3"); audio.play();  break;
    case "j":var audio= new Audio("sounds/snare.mp3"); audio.play();  break;
    case "k":var audio= new Audio("sounds/crash.mp3"); audio.play();  break;
    case "l":var audio= new Audio("sounds/kick-bass.mp3"); audio.play();  break;
  
    default:
      break;
  }

}
// DETECTING KEYBOARD PRESSES



document.addEventListener
("DOMContentLoaded", function () 
  {
       document.addEventListener
       ("keypress",function(event)
         {
          KeyBoard(event.key);
          activeAnimation(event.key);

         }
       );

  }
);


function KeyBoard(key){

  switch (key) {
    case "w":var audio= new Audio("sounds/tom-1.mp3"); audio.play();  break;
    case "d":var audio= new Audio("sounds/tom-2.mp3"); audio.play();  break;
    case "a":var audio= new Audio("sounds/tom-3.mp3"); audio.play();  break;
    case "s":var audio= new Audio("sounds/tom-4.mp3"); audio.play();  break;
    case "j":var audio= new Audio("sounds/snare.mp3"); audio.play();  break;
    case "k":var audio= new Audio("sounds/crash.mp3"); audio.play();  break;
    case "l":var audio= new Audio("sounds/kick-bass.mp3"); audio.play();  break;
  
    default:
      break;
  }
}
// activeAnimation
// function activeAnimation(currentKey) {
//   var activeButton = document.querySelector("." + currentKey);
//   activeButton.classList.add("pressed");

//   setTimeout(function () {
//     activeButton.classList.remove("pressed");
//   }, 100); // Adjust the delay as needed
// }






function activeAnimation(currentKey)
{
var activeButton= document.querySelector( "." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){ activeButton.classList.remove("pressed");} , 100);

}