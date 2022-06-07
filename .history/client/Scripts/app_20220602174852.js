"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map

jQuery(document).ready(function($) {
    // Scroll to the desired section on click
    // Make sure to add the `data-scroll` attribute to your `<a>`          tag.
    // Example: 
    // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
    function scrollToSection(event) {
      event.preventDefault();
      var $section = $($(this).attr('href')); 
      $('html, body').animate({
        scrollTop: $section.offset().top
      }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
  }(jQuery));
  
  //linke tıklandığında active class ekle
  //menüyü kapat
  //change active status
  $(".nav li a").click(function() {
      $(this).parent().addClass('active').siblings().removeClass('active');
      $("#navbar").removeClass("in");    
  });
  
  