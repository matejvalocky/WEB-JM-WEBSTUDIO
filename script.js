// SIDE MENU ANIMATION************************************//

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// JQUERY*******************************************//

$(function(){

 

  $("#webstudio").click(function() {                    // plynuté presunutie do urcitej sekcie */
    $('html, body').animate({
        scrollTop: $(".footerWrapper").offset().top 
    }, 2000);
});

$(".uvod").click(function() {
  $('html, body').animate({
      scrollTop: $("#").offset().top 
  }, 2000);
});






});