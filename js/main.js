;
/* =======================================
 * Init js
 * =======================================
 */
console.log('--');
console.log('Hello visitor & wellcome to afterwork space.');
console.log('contact us @ contact@afterworkspace.com');
console.log('--');

var classTouch;

/* =======================================
 * DOM ready
 * =======================================
 */
$(document).ready(function() {
  // console.info( "DOM ready..." );

  //find in html el class name -touch-
  classTouch = $("html").hasClass("touchevents");
  console.log("html - has class touch (mobile device): " + classTouch);

  // preloader
  showLoader();

  // whatever happens close loader after 2sec
  setTimeout(function() {
    hideLoader();
  }, 2000);

  function showLoader() {
    $('body').addClass('loading');
    var $loader = $('.loader');

    $loader.css({
      'display': 'block',
      'opacity': 1
    });

    $('.main').waitForImages(function() {
      hideLoader()

    }, function(loaded, count, success) {
      var pc = Math.ceil(loaded / count * 100)
      $loader.find('.progress').css('width', pc + '%')
    });
  };

  function hideLoader() {
    var $loader = $('.loader');
    $loader.find('.progress').css('width', '100%');

    setTimeout(function() {
      $loader.find('.progress-bar').fadeTo(500, 0)
      setTimeout(function() {
        $loader.fadeTo(700, 0, function() {
          $('body').removeClass('loading');
          $loader.css('display', 'none');
        })
      }, 600)
    }, 200)
  };

});

/* =======================================
 * On win load
 * =======================================
 */
$(window).load(function() {
  // console.info('window loaded..');

  // preloader
  // $('body').addClass('preloader-done');
  $('.hp__intro').css("display", "block");
  // $('#preloader').addClass('start-opacity');

  //
  if (classTouch) { //this is mobile device
    // remove vide el.
    $('.video-background-container').find('video').remove();
    // set img insted video
    $('.video-background-container').css("background-image", "url('img/ui/cover-photo-light.jpg')");
    $('.video-background-container').css("background-size", "cover");
    $(".ui-container").css("top", "0px");
    $(".hp__intro").css("position", "relative");
    $('.hp__intro').css("display", "block");
    // $('#preloader').addClass('start-opacity');
  }
  // else {
  // $( '#preloader' ).fadeOut( 1000, function() {
  // $('body').addClass('preloader-done');
  // $('.hp__intro').css("display", "block");
  //remove AW
  // $('#preloader').addClass('start-opacity');
  // }

});

/* =======================================
 * onScroll
 * =======================================
 */
// $('.l-header').addClass('hide');

// var countT = 0;

$(window).on('scroll', function() {
  //
    if (!classTouch) {
  //
  //   //  Header menu show/hide
  if ($(window).scrollTop() >= 900) {
    //     $('.l-header').addClass('hide');
    //     // $('.ui-container').removeClass('ui--down');
    //     // set 1st time only
    //
    $('.l-header').addClass('header-transparent--after-hero');
  } else {
    $('.l-header').removeClass('header-transparent--after-hero');
  }
}else{//mobile device
if ($(window).scrollTop() >500) {
  $('.l-header').addClass('header-transparent--after-hero');
} else {
  $('.l-header').removeClass('header-transparent--after-hero');
}
}

  //
  //     // if (countT == 0) {
  //     //   $('.ui-container').addClass('ui--up');
  //     //   $('.ui-container').css('top', bodyTop);
  //     // }
  //     // countT = 1;
  //
  //   } else {
  //     // countT = 0; //reset
  //     $('.l-header').removeClass('hide');
  //     // $('.ui-container').removeClass('ui--up');
  //     // $('.ui-container').addClass('ui--down');
  //     // $('.ui-container').css('top', 900);
  //
  // } //else {
  //   $('.l-header').addClass('hide');
  // }
});

/* =======================================
 * onmousewheel
 * =======================================
 */

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;

  handle(delta);
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

function handle(delta) {
  var time = 1000;
  var distance = 220;

  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() - (distance * delta)
  }, time);
}

/* =======================================
 * WOW - anima
 * =======================================
 */
wow = new WOW({
  animateClass: 'animated',
  offset: 50,
  mobile: false,
  callback: function(box) {
    // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
});
wow.init();
