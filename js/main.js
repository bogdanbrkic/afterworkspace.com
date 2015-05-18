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
      min_w = 300,
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
 * On win load
 * =======================================
 */
$(window).load(function() {
  console.log('window loaded..');

  $( '#preloader' ).fadeOut( 1000, function() {
    $( 'body' ).addClass( 'preloader-done' );
    $( '.hp__intro' ).css( "display", "block" );
    resizeVideoBackground();
  });

});

/* =======================================
 * onScroll
 * =======================================
 */
$(window).on('scroll', function() {
  //  Header
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
//   $('#preloader .preloader-logo > img').on('load', function() {
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
