var pos = 0;
var turn = 0;
var data = ['WEB DEVELOPER','UI/UX DESIGNER','DATABASE MANAGEMENT'];
var speed = 125;

setTimeout(typeWriter, speed);
//Funtion for typewriter effect on Banner
function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("demo").innerHTML += data[turn].charAt(pos);
    pos++;
    setTimeout(typeWriter, speed);
  } else {
  	setTimeout(erase, speed);
  }
}

function erase() {
	if (pos >= 0) {
      var str=data[turn].toString().substring(0, pos);
      document.getElementById("demo").innerHTML = str;
      pos--;
      setTimeout(erase, speed);
    } else {
      turn++;
      if(turn>=data.length)
        turn=0;
      setTimeout(typeWriter, speed);
    }
}
$(function(){
  $.scrollIt();
});



//Call in document ready function
$(document).ready(function(){

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var demo = document.getElementById("demo");
var navbarHead = document.getElementById("navbarHead");

// Get the offset position of the navbar
var sticky = demo.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarHead.classList.add("sticky")
  } else {
    navbarHead.classList.remove("sticky");
  }
}


//Clicking on education or expeirence buttons changes viewable content

  var expContent = document.getElementById("tab-1-content");
  var eduContent = document.getElementById("tab-2-content");
  var expTab = document.getElementById("tab1");
  var eduTab = document.getElementById("tab2");
  let expIcon = document.getElementById("icon1")
  let eduIcon = document.getElementById("icon2")


//Checks to see if the button clicked has an active class. If
//it does not, it will toggle the button and add the active class
  $('.tabTog').click(function () {
    if ( $(this).is(':not(.active)') ) {
      expContent.classList.toggle('active');
      eduContent.classList.toggle('active');
      expTab.classList.toggle('active');
      eduTab.classList.toggle('active');
      expIcon.classList.toggle('activeIcon');
      eduIcon.classList.toggle('activeIcon');
      }
});


//Toggle resume

/*

document.getElementById('tab1').onclick= toggleResume();
document.getElementById('tab2').onclick= toggleResume();

  function toggleResume() {
    if ( this.hasClass('active') ) {
      expContent.classList.toggle('active');
      eduContent.classList.toggle('active');
      expTab.classList.toggle('active');
      eduTab.classList.toggle('active');
      expIcon.classList.toggle('activeIcon');
      eduIcon.classList.toggle('activeIcon');
  }

  }
*/
let hamburger = document.getElementById("toggle");
let overlay = document.getElementById("disableOverlay");
hamburger.checked=true;
/*Check if checkbox is checked, and Hides miniNav when links are clicked, and rotates hamburger */
$(".hideNav").click(function() {
  if(hamburger.checked===false){
      $(".nav").css('top', '-100%');
      $(".hideNav").css('opacity', '0');
      $(".hideNav").css('scale', '0');
      $(".top").css('transform', 'rotate(0)');
      $(".top").css('-webkit-transform:', 'rotate(0)');
      $(".top").css('margin-top', '4px');
      $(".meat").css('transform', 'rotate(0)');
      $(".meat").css('-webkit-transform:', 'rotate(0)');
      $(".meat").css('margin-top', '4px');
      $(".bottom").css('transform', 'scale(1)');
      $(".bottom").css('-webkit-transform:', 'scale(1)');


}
  });

/*When hamburger is clicked, Checks to see if check box is true or false, and hides or makes nav visible*/
$(".hamburger").click(function() {
  if(hamburger.checked === true){
    //When hamburger is closed and you click it
    $(".nav").css('top', '0');
    $(".hideNav").css('opacity', '0.9');
    $(".hideNav").css('scale', '1');
    $(".top").css('transform', 'rotate(-45deg)');
    $(".top").css('-webkit-transform:', 'rotate(-45deg)');
    $(".top").css('margin-top', '22.5px');
    $(".meat").css('transform', 'rotate(45deg)');
    $(".meat").css('-webkit-transform:', 'rotate(45deg)');
    $(".meat").css('margin-top', '-5px');
    $(".bottom").css('transform', 'scale(0)');
    $(".bottom").css('-webkit-transform:', 'scale(0)');
    overlay.classList.remove("overlay");
    $(".pic").hover(
      function(){
          $("#info", this).css("display", "none");

    	}, function(){
      		$("#info", this).css("display", "none");
    })

  }else if (hamburger.checked === false) {
    //When hamburger is open and you click it
    $(".nav").css('top', '-100%');
    $(".hideNav").css('opacity', '0');
    $(".hideNav").css('scale', '0');
    $(".top").css('transform', 'rotate(0)');
    $(".top").css('-webkit-transform:', 'rotate(0)');
    $(".top").css('margin-top', '4px');
    $(".meat").css('transform', 'rotate(0)');
    $(".meat").css('-webkit-transform:', 'rotate(0)');
    $(".meat").css('margin-top', '4px');
    $(".bottom").css('transform', 'scale(1)');
    $(".bottom").css('-webkit-transform:', 'scale(1)');
    overlay.classList.add("overlay");


    $(".pic").hover(
      function(){
          $("#info", this).css("display", "inline");

    	}, function(){
      		$("#info", this).css("display", "none");
    })

  }
  });

/*
  $(".hamburger").click(function() {
    if (hamburger.checked === false){
    $(".nav").css('top', '-100%');
    $(".hideNav").css('opacity', '0');
    $(".hideNav").css('scale', '0');
    $(".top").css('transform', 'rotate(0)');
    $(".top").css('-webkit-transform:', 'rotate(0)');
    $(".top").css('margin-top', '4px');
    $(".meat").css('transform', 'rotate(0)');
    $(".meat").css('-webkit-transform:', 'rotate(0)');
    $(".meat").css('margin-top', '4px');
    $(".bottom").css('transform', 'scale(1)');
    $(".bottom").css('-webkit-transform:', 'scale(1)');
alert(2);
  }
  });
*/



$(".pic").hover(
  function(){
      $("#info", this).css("display", "inline");

	}, function(){
  		$("#info", this).css("display", "none");
})

//You are going to have to create an event listener that somehow gets the ID of the button click. Grabs
//its unique attributes (i.e. src) then make the modal src its src.
// Get the modal
//If web1 is clicked do such and such case
//add event listener to each link
//depending on Id of event.target src the image on the modalImg

var modal = document.getElementById('myModal');


// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");

document.getElementById('webS1').onclick= modalFunc;
document.getElementById('webS2').onclick= modalFunc;
document.getElementById('webS3').onclick= modalFunc;
document.getElementById('webS4').onclick= modalFunc;
document.getElementById('webS5').onclick= modalFunc;
document.getElementById('webS6').onclick= modalFunc;
document.getElementById('webS7').onclick= modalFunc;
document.getElementById('webS8').onclick= modalFunc;
document.getElementById('webS9').onclick= modalFunc;
document.getElementById('webS10').onclick= modalFunc;
document.getElementById('webS11').onclick= modalFunc;
document.getElementById('webS12').onclick= modalFunc;
document.getElementById('webS13').onclick= modalFunc;
document.getElementById('webS14').onclick= modalFunc;
document.getElementById('webS15').onclick= modalFunc;
document.getElementById('webS16').onclick= modalFunc;
//Src is not getting sent to modal img. WHy. seems to work with img tag not a link tag
function modalFunc(e){

    let img=e.target;

    if(img.id ===e.target.id){
    modal.style.display = "block";
    modalImg.src = img.firstChild.src;

  }
}
/*Closes Modal when clicking anywhere*/
modal.addEventListener('click',function(){
this.style.display="none";
})
/*
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img.firstChild.src;
    console.log(this.firstChild.src);

}
*/
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
});
