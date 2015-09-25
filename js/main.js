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
$( document ).ready(function(){
 // console.info( "DOM ready..." );

//find in html el class name -touch-
classTouch = $("html").hasClass("touch");
// console.log("html - has class touch (mobile device): " + classTouch);
});

/* =======================================
 * On win load
 * =======================================
 */
$(window).load(function() {
  // console.info('window loaded..');

   $('body').addClass('preloader-done');
    $('.hp__intro').css("display", "block");
   //remove AW
   $('#preloader').addClass('start-opacity');

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
  } else {
    // $( '#preloader' ).fadeOut( 1000, function() {
    // $('body').addClass('preloader-done');
    // $('.hp__intro').css("display", "block");
    //remove AW
    // $('#preloader').addClass('start-opacity');
  }

});


  $(window).load(function(){
    $(".content").mCustomScrollbar();
  });
/* =======================================
 * onScroll
 * =======================================
 */
$('.l-header').addClass('hide');

  var countT = 0;

  $(window).on('scroll', function() {

    if (!classTouch) {

    //  Header menu show/hide
    if ($(window).scrollTop() > 55) {
      $('.l-header').addClass('hide');
      $('.ui-container').removeClass('ui--down');
      // set 1st time only

      var bodyTop = $('body').scrollTop();
      console.log(bodyTop);

      if (countT == 0) {
        $('.ui-container').addClass('ui--up');
        $('.ui-container').css('top', bodyTop);
      }
      countT = 1;

    } else {
      countT = 0; //reset
      $('.l-header').removeClass('hide');
      $('.ui-container').removeClass('ui--up');
      $('.ui-container').addClass('ui--down');
      $('.ui-container').css('top', 900);
    }

  } else {
    $('.l-header').addClass('hide');
  }
  });

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
