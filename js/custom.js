$(document).ready(function () {

    $(window).scroll(function () {
        //var topheight = $('.Servc_sec_nw').outerHeight();
        if ($(this).scrollTop() > 2) {
            $('.fHeader').addClass("active ");
        }
        else {
            $('.fHeader').removeClass("active ");
        };
    });


    

});

// Get the button
let mybutton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// $(document).ready(function () {

//     setTimeout(function()
//     {
//         $('.loading-area').fadeToggle();
//     },1500
//     );
// });

// $(document).ready(function () {

// var webloader=document.getElementById("loading");
// window.addEventListener("load", function(){
//     webloader.style.display="none";
// })
// });
// new WOW().init();