import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if(Meteor.isClient){
  Blaze._allowJavascriptUrls();
}

Template.adminPanel.rendered = function() {
  /*
   * Slick init, for more examples you can check out http://kenwheeler.github.io/slick/
   *
   * App.initHelper('slick');
   *
   */
    jQuery('.js-slider').each(function(){
        var $slider = jQuery(this);

        // Get each slider's init data
        var $sliderArrows       = $slider.data('slider-arrows') ? $slider.data('slider-arrows') : false;
        var $sliderDots         = $slider.data('slider-dots') ? $slider.data('slider-dots') : false;
        var $sliderNum          = $slider.data('slider-num') ? $slider.data('slider-num') : 1;
        var $sliderAuto         = $slider.data('slider-autoplay') ? $slider.data('slider-autoplay') : false;
        var $sliderAutoSpeed    = $slider.data('slider-autoplay-speed') ? $slider.data('slider-autoplay-speed') : 3000;

        // Init slick slider
        $slider.slick({
            arrows: $sliderArrows,
            dots: $sliderDots,
            slidesToShow: $sliderNum,
            autoplay: $sliderAuto,
            autoplaySpeed: $sliderAutoSpeed
        });
    });
  }
