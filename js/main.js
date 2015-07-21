/* =======================================
 * Init js
 * =======================================
 */
;
console.log('Hello visitor & wellcome to afterwork space.');


/* =======================================
 *  Resize Video Background
 * =======================================
 */
var resizeVideoBackground = function() {

  $('.video-background').each(function(i, el) {
    var $el = $(el),
      $section = $el.parent(),
      min_w = 250,
      video_w = 16,
      video_h = 9,
      section_w = $section.outerWidth(),
      section_h = $section.outerHeight(),
      scale_w = section_w / video_w,
      scale_h = section_h / video_h,
      scale = scale_w > scale_h ? scale_w : scale_h,
      new_video_w, new_video_h, offet_top, offet_left;


    if (scale * video_w < min_w) {
      scale = min_w / video_w;
    };

    new_video_w = scale * video_w;
    new_video_h = scale * video_h;
    offet_left = (new_video_w - section_w) / 2 * -1;
    offet_top = (new_video_h - section_h) / 2 * -1;

    $el.css('width', new_video_w);
    $el.css('height', new_video_h);
    $el.css('marginTop', offet_top);
    $el.css('marginLeft', offet_left);
  });

};

/* =======================================
 * Resize Video Background
 * =======================================
 */
$(window).on('resize', function() {
  resizeVideoBackground();
});

/* =======================================
 * noscroll
 * =======================================
 */
function noscroll() {
  window.scrollTo( 0, 0 );
}

/* =======================================
 * On win load
 * =======================================
 */
$(window).load(function() {

  console.log('window loaded..');

  //$( '#preloader' ).fadeOut( 1000, function() {
    $( 'body' ).addClass( 'preloader-done' );
    $( '.hp__intro' ).css( "display", "block" );
    resizeVideoBackground();
    //remove AW
    $( '#preloader' ).addClass( 'start-opacity' );
  //});

});

//css anima
// var animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' };
// var animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
// var anim = document.getElementById("preloader");
// // anim.addEventListener("animationstart", AnimationListener, false);
// anim.addEventListener( animEndEventName, onEndInitialAnimation );
//
// var pfx = ["webkit", "moz", "MS", "o", ""];
// function PrefixedEvent(element, type, callback) {
// 	for (var p = 0; p < pfx.length; p++) {
// 		if (!pfx[p]) type = type.toLowerCase();
// 		element.addEventListener(pfx[p]+type, callback, false);
// 	}
// }
//
// // animation listener events
// PrefixedEvent(anim, "AnimationStart", AnimationListener);
// PrefixedEvent(anim, "AnimationIteration", AnimationListener);
// PrefixedEvent(anim, "AnimationEnd", AnimationListener);
//
// // logic
// if (e.animationName == "animInitialHeader" && e.type.toLowerCase().indexOf("animationend") >= 0) {
//   console.log('---- animInitialHeader end.');
// }

/* =======================================
 * onScroll
 * =======================================
 */
$(window).on('scroll', function() {
  //  Header menu show/hide
  if ($(window).scrollTop() > 55) {
    $('.l-header').addClass('hide');
  } else {
    $('.l-header').removeClass('hide');
  }
});

/* =======================================
 * Preload seq.
 * =======================================
 */
// $(document).on('ready', function() {
//     $('#preloader .preloader-logo > img').on('load', function() {
//     $(this).show().addClass('bounceIn').next().show();
//   });
// });
/* =======================================
 * WOW - anima
 * =======================================
 */
wow = new WOW({
  animateClass: 'animated',
  offset: 50,
  mobile: false,
  callback: function(box) {
  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
});
wow.init();
