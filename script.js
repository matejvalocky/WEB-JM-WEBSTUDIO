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
        scrollTop: $("html, body").offset().top -90     // korekcia vertikalneho posunutia o pixely -90pixelov */
    }, 1000);
});



$(".textViacInfo").click(function() {                         // plynuté presunutie do urcitej sekcie */
  $('html, body').animate({
      scrollTop: $("#overview").offset().top +900                   // korekcia vertikalneho posunutia o pixely +90pixelov */
  }, 1000);
});



$(".moreInfo").click(function() {                               // plynuté presunutie do urcitej sekcie */
  $('html, body').animate({
      scrollTop: $("#ceny").offset().top -90                     // korekcia vertikalneho posunutia o pixely +90pixelov */
  }, 1000);
});




$(".zaujaliBtn").click(function() {                               // plynuté presunutie do urcitej sekcie */
  $('html, body').animate({
      scrollTop: $("#kontakt").offset().top -90                     // korekcia vertikalneho posunutia o pixely +90pixelov */
  }, 1000);
});



















});

// JQUERY KONIEC KÓDU*******************************************//