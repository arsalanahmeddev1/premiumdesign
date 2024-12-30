$(document).ready(function(){





  $('.popup-btn').on('click', function(){
    $('.popupform-main-new-popup').addClass('active');
    $('body').addClass('o-hidden');
    $('.overlay-bg').fadeIn(500);
    $('.close-btn').on('click', function() {
      $('.popupform-main-new-popup').removeClass('active');
      $('body').removeClass('o-hidden');
      $('.overlay-bg').fadeOut(500);
    });
    $('.overlay-bg').click(function() {
      $('popupform-main-new-popup').removeClass('active');
      $('body').removeClass('o-hidden');
      $('.overlay-bg').fadeOut(500);
    });
  });
  });


$(function () {
    var url = window.location.pathname; //sets the variable "url" to the pathname of the current window
    var activePage = url.substring(url.lastIndexOf('/') + 1); //sets the variable "activePage" as the substring after the last "/" in the "url" variable
        $('.head_top ul li a').each(function () { //looks in each link item within the primary-nav list
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); //sets the variable "linkPage" as the substring of the url path in each &lt;a&gt;
 
            if (activePage == linkPage) { //compares the path of the current window to the path of the linked page in the nav item
                $(this).parent().addClass('active'); //if the above is true, add the "active" class to the parent of the &lt;a&gt; which is the &lt;li&gt; in the nav list
            }
        });
})





$('.what_we_do_s').slick({
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    autoplay: true,
    autoplaySpeed: 4000,  
    touchThreshold: 100,
    responsive: [
    {
    breakpoint: 1650,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
      breakpoint: 1400,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    ]
    });








 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


    

/*! rangeslider.js - v2.1.1 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(){var a=document.createElement("input");return a.setAttribute("type","range"),"text"!==a.type}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)}function d(a,b){return b=b||100,function(){if(!a.debouncing){var c=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,c),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},b),a.lastReturnVal}}function e(a){return a&&(0===a.offsetWidth||0===a.offsetHeight||a.open===!1)}function f(a){for(var b=[],c=a.parentNode;e(c);)b.push(c),c=c.parentNode;return b}function g(a,b){function c(a){"undefined"!=typeof a.open&&(a.open=a.open?!1:!0)}var d=f(a),e=d.length,g=[],h=a[b];if(e){for(var i=0;e>i;i++)g[i]=d[i].style.cssText,d[i].style.setProperty?d[i].style.setProperty("display","block","important"):d[i].style.cssText+=";display: block !important",d[i].style.height="0",d[i].style.overflow="hidden",d[i].style.visibility="hidden",c(d[i]);h=a[b];for(var j=0;e>j;j++)d[j].style.cssText=g[j],c(d[j])}return h}function h(a,b){var c=parseFloat(a);return Number.isNaN(c)?b:c}function i(a){return a.charAt(0).toUpperCase()+a.substr(1)}function j(b,e){if(this.$window=a(window),this.$document=a(document),this.$element=a(b),this.options=a.extend({},n,e),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=o.orientation[this.orientation].dimension,this.DIRECTION=o.orientation[this.orientation].direction,this.DIRECTION_STYLE=o.orientation[this.orientation].directionStyle,this.COORDINATE=o.orientation[this.orientation].coordinate,this.polyfill&&m)return!1;this.identifier="js-"+k+"-"+l++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=a('<div class="'+this.options.fillClass+'" />'),this.$handle=a('<div class="'+this.options.handleClass+'" />'),this.$range=a('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=a.proxy(this.handleDown,this),this.handleMove=a.proxy(this.handleMove,this),this.handleEnd=a.proxy(this.handleEnd,this),this.init();var f=this;this.$window.on("resize."+this.identifier,d(function(){c(function(){f.update(!1,!1)},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(a,b){if(!b||b.origin!==f.identifier){var c=a.target.value,d=f.getPositionFromValue(c);f.setPosition(d)}})}Number.isNaN=Number.isNaN||function(a){return"number"==typeof a&&a!==a};var k="rangeslider",l=0,m=b(),n={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},o={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return j.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},j.prototype.update=function(a,b){a=a||!1,a&&(this.min=h(this.$element[0].getAttribute("min"),0),this.max=h(this.$element[0].getAttribute("max"),100),this.value=h(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=h(this.$element[0].getAttribute("step"),1)),this.handleDimension=g(this.$handle[0],"offset"+i(this.DIMENSION)),this.rangeDimension=g(this.$range[0],"offset"+i(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,b)},j.prototype.handleDown=function(a){if(this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),!((" "+a.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var b=this.getRelativePosition(a),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=this.getPositionFromNode(this.$handle[0])-c,e="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(e),b>=d&&b<d+this.handleDimension&&(this.grabPos=b-d)}},j.prototype.handleMove=function(a){a.preventDefault();var b=this.getRelativePosition(a),c="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(c)},j.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},j.prototype.cap=function(a,b,c){return b>a?b:a>c?c:a},j.prototype.setPosition=function(a,b){var c,d;void 0===b&&(b=!0),c=this.getValueFromPosition(this.cap(a,0,this.maxHandlePos)),d=this.getPositionFromValue(c),this.$fill[0].style[this.DIMENSION]=d+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=d+"px",this.setValue(c),this.position=d,this.value=c,b&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(d,c)},j.prototype.getPositionFromNode=function(a){for(var b=0;null!==a;)b+=a.offsetLeft,a=a.offsetParent;return b},j.prototype.getRelativePosition=function(a){var b=i(this.COORDINATE),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=0;return"undefined"!=typeof a["page"+b]?d=a["client"+b]:"undefined"!=typeof a.originalEvent["client"+b]?d=a.originalEvent["client"+b]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0]["client"+b]?d=a.originalEvent.touches[0]["client"+b]:a.currentPoint&&"undefined"!=typeof a.currentPoint[this.COORDINATE]&&(d=a.currentPoint[this.COORDINATE]),d-c},j.prototype.getPositionFromValue=function(a){var b,c;return b=(a-this.min)/(this.max-this.min),c=Number.isNaN(b)?0:b*this.maxHandlePos},j.prototype.getValueFromPosition=function(a){var b,c;return b=a/(this.maxHandlePos||1),c=this.step*Math.round(b*(this.max-this.min)/this.step)+this.min,Number(c.toFixed(this.toFixed))},j.prototype.setValue=function(a){(a!==this.value||""===this.$element[0].value)&&this.$element.val(a).trigger("input",{origin:this.identifier})},j.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+k),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},a.fn[k]=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("plugin_"+k);e||d.data("plugin_"+k,e=new j(this,b)),"string"==typeof b&&e[b].apply(e,c)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});
$(function(){
  $('input[type="range"]').rangeslider({
    polyfill:false,
    onInit:function(){
       $('.header .pull-right').text($('input[type="range"]').val().toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")+' AED');


      var d =  $('.header .pull-right').text($('input[type="range"]').val().toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")+' AED');

      $('#lead_area_contact').val(d)
    },
    onSlide:function(position, value){
      //console.log('onSlide');
      //console.log('position: ' + position, 'value: ' + value);
      $('.header .pull-right').text(value.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")+' AED');

    var e =    $('.header .pull-right').text(value.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")+' AED');
       $('#lead_area_contact').val("for AED " + value)
    },
    onSlideEnd:function(position, value){
      //console.log('onSlideEnd');
      //console.log('position: ' + position, 'value: ' + value);
    }
  });
});





$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

  $(".open-menu").click(function() {
    $("body").toggleClass("active-menu");
    console.log("click");
  });
  $(".hover-parent").hover(function() {
    $(this).find(".sub-menu").addClass("active");
  });
  $(".hover-parent").hover(function() {
    $(this).find(".sub-menu").css('display', 'block');
  }, function() {
    // change to any color that was previously used.
    $(this).find(".sub-menu").css('display', 'none');
  });
  gsap.registerPlugin(ScrollTrigger);
  let revealContainers = document.querySelectorAll(".reveal");
  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
      }
    });
    tl.set(container, {
      autoAlpha: 1
    });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
    });
  });
  //Navigation
$('.menu_dd').hide();
$('.arrow_down').click(function () {
$('.menu_dd').not($(this).next()).hide();
$(this).next().stop(true, true).slideToggle();
});

  $('.hover').click(function() {
    var value1 = $(this).attr('data-src');
    var value2 = $(this).attr('data-src1');
    var value3 = $(this).attr('data-src2');
    var value4 = $(this).attr('data-src3');
    var value5 = $(this).attr('data-txt');
    var value6 = $(this).attr('data-head');
    $('#cord-cover1').attr('src', value1);
    $('#cord-cover2').attr('src', value2);
    $('#cord-cover3').attr('src', value3);
    $('#cord-cover4').attr('src', value4);
    $('#cord-cover5').html(value5);
    $('#cord-cover6').html(value6);
  });
  $(document).ready(function() {
    $(".hover").click(function() {
      $(".hover").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below
      $(this).addClass("active");
    });
  });
  $('.various').click(function() {
    $('#ouibounce-modal').css('display', 'block');
  });
  $(document).ready(function() {
    //var currentIP;
    var key = '5XpThOAEkfgOvEJ';
    var currentIP = $("meta[name=ip2loc]").attr('content');
    var pgurl = $("meta[name=page_url]").attr('content');
    $.ajax({
      method: 'get',
      url: '//pro.ip-api.com/json/' + currentIP,
      data: {
        key: key
      },
      success: function(data) {
        if (data) {
          $('input[name=ip2loc_ip]').val(data.query);
          $('input[name=ip2loc_isp]').val(data.isp);
          $('input[name=ip2loc_org]').val(data.org);
          $('input[name=ip2loc_country]').val(data.country);
          $('input[name=ip2loc_region]').val(data.regionName);
          $('input[name=ip2loc_city]').val(data.city);
          $('input[name=pageurl]').val(pgurl);
        }
      }
    });
  });
  $(".header-down").click(function(){
$(".industries-list").slideToggle("slow");
});
   $(document).ready(function() {
      $(".fancybox").fancybox();
      });
      function alphaOnly(event) {
      var key = event.keyCode;
      return ((key >= 65 && key <= 90) || key == 8);
      };
      function order_now_value(objButton){
      x = objButton.name;
      document.getElementById('lead_area_popup1').value = x;
      document.getElementById('lead_text').innerHTML = x;
      }

  $('.service-slider').slick({
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    autoplay: true,
    autoplaySpeed: 4000,
    touchThreshold: 100,
    responsive: [{
      breakpoint: 1650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.testi-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.industrie-slider').slick({
    draggable: true,
    arrows: false,
    dots: true,
    fade: false,
    vertical: true,
    speed: 900,
    infinite: false,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    autoplay: true,
    autoplaySpeed: 4000,
    touchThreshold: 100,
    responsive: [{
      breakpoint: 1650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });



  $('.impacable-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, 
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, 
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
     {
      breakpoint: 600,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  if ($(window).width() < 824) {
      $('.why-slider-ind').slick({
               dots: true,
               infinite: false,
               arrows:false,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 1
              

               });
       };
  var main = function() {
    //toggle dropdown menu
    $('.dropdown-toggle').click(function() {
      $('.dropdown-menu').toggle().animate({
        height: '250px'
      }, 1100)
    });
    $('.arrow-prev').click(function() {
      //previous slide variables
      var currentSlide = $('.active-slide');
      prevSlide = currentSlide.prev();
      var currentDot = $('.active-dot');
      var prevDot = currentDot.prev();
      if (prevSlide.length == 0) {
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
      }
      //apply variables to change back to prev slide
      currentSlide.fadeOut(600).removeClass('active-slide');
      prevSlide.fadeIn(600).addClass('active-slide');
      //make current dot go to prev dot
      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');
    });
    $('.arrow-next').click(function() {
      //next slide variables
      var currentSlide = $('.active-slide');
      var nextSlide = currentSlide.next();
      //next dot variables
      var currentDot = $('.active-dot');
      var nextDot = $('.active-dot').next();
      if (nextSlide.length == 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
      }
      //moving to next slide
      currentSlide.fadeOut(200).removeClass('active-slide');
      nextSlide.fadeIn(1200).addClass('active-slide');
      //moving to next dot
      currentDot.removeClass('active-dot');
      nextDot.addClass('active-dot');
    });
  }
  //Navigation
  var app = function() {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function() {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  }
  ();
  $(document).ready(function() {
    $(".inner-menu-st").click(function() {
      $(".inner-menu-st").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below
      $(this).addClass("active");
    });
  });
