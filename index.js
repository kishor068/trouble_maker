for (var i = 0; i<document.querySelectorAll(".images").length; i++)
 {
  document.querySelectorAll(".images")[i].addEventListener("click", fun);

}


function fun(btn) {
  // alert("hello");
  // alert(btn.id);
  // alert(btn.id);  
  switch (btn.id) {
    case "shahid":
      var sh = new Audio("sounds/Shahid.ogg");
      sh.play();
      break;
    case "lenwick": var sh = new Audio("sounds/manasw.ogg");
      sh.play();
      break;
    case "kishor":
      var sh = new Audio("sounds/k.mp3");
      sh.play();
      break;
    case "priyanka":
      var sh = new Audio("sounds/");
      sh.play();

      break;
    case "manaswi":
      var sh = new Audio("sounds/manaswi.ogg");
      sh.play();

      break;
    case "preethi":
      var sh = new Audio("sounds/preethi.mp3");
      sh.play();

      break;
    case "navya":
      var sh = new Audio("sounds/navya.ogg");
      sh.play();

      break;
    case "vikram":
      var sh = new Audio("sounds/vicky.mp3");
      sh.play();

      break;
    case "writvan":
      var sh = new Audio("sounds/wrtivan.mp3");
      sh.play();

      break;
    case "varun":
      var sh = new Audio("sounds/varun.ogg");
      sh.play();

      break;
    case "mallya":
      var sh = new Audio("sounds/mallya.ogg");
      sh.play();

      break;
    case "sanketh":
      var sh = new Audio("sounds/Sanky.ogg");
      sh.play();

      break;
    // case "shahid":
    //   var sh = new Audio("");
    //   sh.play();



    default:console.log("invalid");
      break;
  }
}
