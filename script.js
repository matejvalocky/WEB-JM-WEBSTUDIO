// SIDE MENU ANIMATION************************************//

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// JQUERY ZAČIATOK KÓDU*******************************************//

$(function(){

 

  $("#webstudio").click(function() {                          // plynuté presunutie do urcitej sekcie */
    $('html, body').animate({
        scrollTop: $(".ponuknutWrapper").offset().top -90     // korekcia vertikalneho posunutia o pixely -90pixelov */
    }, 1000);
});



$(".textViacInfo").click(function() {                         // plynuté presunutie do urcitej sekcie */
  $('html, body').animate({
      scrollTop: $("#now").offset().top +90                   // korekcia vertikalneho posunutia o pixely +90pixelov */
  }, 1000);
});














});

// JQUERY KONIEC KÓDU*******************************************//