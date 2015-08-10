  /* =======================================
   * Init js
   * =======================================
   */
  ;
  console.log('Hello visitor & wellcome to afterwork space.');

  //find in html el class name -touch-
  var classTouch = $("html").hasClass("touch");
  // console.log("html - has class touch (mobile device): " + classTouch);

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
    window.scrollTo(0, 0);
  }

  /* =======================================
   * On win load
   * =======================================
   */
  $(window).load(function() {

    console.log('window loaded..');

    if (classTouch) { //this is mobile device
      // remove vide el.
      $('.video-background-container').find('video').remove();
      // set img insted video
      $('.video-background-container').css("background-image", "url('img/ui/cover-photo-light.jpg')");
      $('.video-background-container').css("background-size", "cover");
      //
      $(".ui-container").css("top", "0px");
      $(".hp__intro").css("position", "relative");
    }

    //$( '#preloader' ).fadeOut( 1000, function() {
    $('body').addClass('preloader-done');
    $('.hp__intro').css("display", "block");
    resizeVideoBackground();
    //remove AW
    $('#preloader').addClass('start-opacity');
    //});

  });

  /* =======================================
   * onScroll
   * =======================================
   */
  // $('.l-header').addClass('hide');

  if (!classTouch) {

    var countT = 0;

    $(window).on('scroll', function() {
      //  Header menu show/hide
      if ($(window).scrollTop() > 55) {
        $('.l-header').addClass('hide');
        $('.ui-container').removeClass('ui--down');
        // set 1st time only

        var bodyTop = $('body').scrollTop();
        console.log(bodyTop);

        if(countT==0){
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
    });
  } else {
    $('.l-header').addClass('hide');
  }

  /* =======================================
   * Reset page  (on refresh)
   * =======================================
   */
   // write reset on begiining fn()


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
