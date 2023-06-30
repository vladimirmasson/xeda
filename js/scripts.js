/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Slider roadmap
    var Slider = function() {
  var total, $slide, $slider, sliderWidth, increment = 120;
  var on = function() {
    $slider = $('.slider');
    $slide = $('.slide');
    sliderWidth = $slider.width();
    total = $slide.length;
    position();
  }

  var position = function() {
    var sign, half = $('.active').index(), x = 0, z = 0, zindex,scaleX = 1.3,scaleY = 1.3, transformOrigin;
    $slide.each(function(index, element) {
      scaleX = scaleY = 1;
      transformOrigin = sliderWidth / 2;
      if(index < half) {
        sign = 1;
        zindex = index + 1;
        x = sliderWidth / 2 - increment * (half - index + 1);
        z =  -increment * (half - index + 1);
      } else if(index > half) {
        sign = -1
        zindex = total - index;
        x = sliderWidth / 2 + increment * (index - half + 1);
        z =  -increment * (index - half + 1);
      } else {
        sign = 0;
        zindex = total;
        x = sliderWidth / 2;
        z = 1;
        scaleX = scaleY = 1.2;
        transformOrigin = 'initial';
      }
      $(element).css(
        {
          'transform': 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
          'z-index': zindex,
          'transform-origin-x': transformOrigin
        }
      );
    });
  };

  var calculateX = function(position, sign, width) {
    switch(sign) {
      case 1:
      case 0: return position - width / 2;
      case -1: return position - width / 2;
    }
  }
  
  var imageSize = function() {
    return $slider.width() / 3;
  }
  
  var recalculateSizes = function() {
    sliderWidth = $slider.width();
    position();
  }
  
  var clickedImage = function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    position();
  }
  
  var addEvents = function() {
    $( window ).resize(recalculateSizes);
    $(document).on('click','.slide', clickedImage);
  }
  
  return {
    init: function() {
      on();
      addEvents();
    }
  };
}();

$(function(){
  var slider = Slider.init();
})

});
