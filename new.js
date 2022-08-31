$(document).ready(function() {
  var owl = $(".owl-carousel"),
      // rangeArr = [],
      inputType =$("input[type=range]");
  owl.owlCarousel({
    // 'loop': true,
    // 'mouseDrag': false,
    // 'autoplay': true,
    'responsive': {
      0: {
        items: 1,
        slideBy: 1
       
      },
      600: {
        items: 3,
        slideBy: 1
        
      },
      1280: {
        items: 5,
        slideBy: 1
        
        
      }
    }
  });
//   function getIndex(event) {
    
//   }
      owl.on('changed.owl.carousel', function(event) {
      console.log(event.item.index);
      inputType.val(event.item.index);
       
    });
  
  $(".go-me").click(function() {
    owl.trigger("next.owl.carousel");
  });
  $(".back-me").on("click", function() {
    owl.trigger("prev.owl.carousel");
  });
  $("input").on("change", function(e) {
    e.preventDefault();
    console.log(inputType.val());
    // console.log(e.item.index);
    // FIGURE OUT HOW TO GET CAROUSEL INDEX
   
    $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);

  });
});




//Loop thorugh .owl-carousel and find number of items, which will give you the # of pictures in carousel 
//Figure out number of pictures in carousel 
//# of pics = input[max]
//

/* DETECT BREAKPOINTS */
// function viewport(){
//     var e = window;
//     var a = "inner";
//     if (!("innerWidth" in window)){
//         a = "client";
//         e = document.documentElement || document.body;
//     }
//     return { width : e[ a+"Width" ] , height : e[ a+"Height" ] }
// }
// function isMobile() {
//     if(viewport().width < 992) {
//         //console.log("isMobile");
//         return true;
//     } else {
//         return false;
//     }
// }
// function isTablet() {
//     if(viewport().width < 1200) {
//         //console.log("isTablet");
//         return true;
//     } else {
//         return false;
//     }
// }
// function isDesktop() {
//     if(viewport().width >= 1200) {
//         //console.log("isDesktop");
//         return true;
//     } else {
//         return false;
//     }
// }

/*

http://stackoverflow.com/questions/18544890/onchange-event-on-input-type-range-is-not-triggering-in-firefox-while-dragging

ionslider: http://jsfiddle.net/IonDen/qv6yrjrv/

https://github.com/IonDen/ion.rangeSlider

owl carousel with range slider (which one is the complete version? Find it): 

http://jsfiddle.net/mwams6g2/13/

http://jsfiddle.net/broezer/mwams6g2/28/

SO thread on previous link: 

http://stackoverflow.com/questions/35970859/ion-rangeslider-slider-width-and-position-on-update

Styling cross-browser compatible range input: 

https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/

Bootstrap carousel w/ progress bar, when clicked on bar several spaces away from current bar value, it jumps to that value. (on bar 1, click bar 7? Goes to carousel item 7)

https://codepen.io/TheNickelDime/pen/oZBEew


CSS Range Slider: 

https://codepen.io/seanstopnik/pen/CeLqA

*/
