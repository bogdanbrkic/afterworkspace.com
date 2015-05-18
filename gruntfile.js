module.exports = function(grunt) {

  "use strict";
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //*************
    modernizr: {

      dist: {
        // [REQUIRED] Path to the build you're using for development.
        "devFile": "node_modules/grunt-modernizr/lib/modernizr-dev.js",

        // [REQUIRED] Path to save out the built file.
        "outputFile": "build/js/modernizr-custom.js",

        // Based on default settings on http://modernizr.com/download/
        "extra": {
          "shiv": true,
          "printshiv": true,
          "load": true,
          "mq": true,
          "cssclasses": true
        },

        // Based on default settings on http://modernizr.com/download/
        /*
        http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_mediaqueries-css_resize-dataview_api-dom_dataset-file_api-getusermedia-notification-performance-script_async-script_defer-load
        */

        "extensibility": {
          "addtest": true,
          "prefixed": true,
          "teststyles": true,
          "testprops": true,
          "testallprops": true,
          "hasevents": true,
          "prefixes": true,
          "domprefixes": true,
          "fontface": true,
          "history": true,
          "notification": true,
          "cssanimations": true,
          "fullscreen_api": true,
          "css_mediaqueries": true,
          "postmessage": true,
          "applicationcache": true,
          "webworkers": true,
          "canvas": true
        },


        // By default, source is uglified before saving
        "uglify": true,

        // Define any tests you want to implicitly include.
        "tests": [],

        // By default, this task will crawl your project for references to Modernizr tests.
        // Set to false to disable.
        "parseFiles": true,

        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
        // You can override this by defining a "files" array below.
        // "files" : {
        // "src": []
        // },

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        "matchCommunityTests": false,

        // Have custom Modernizr tests? Add paths to their location here.
        "customTests": []
      }

    },

    //*************
    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors: true,
          consolidateMediaQueries: true
        },
        files: {
          'build/css/master.css': 'build/css/master.css'
        }
      }
    },

    sass: {
      build: {
        files: {
          'build/css/master.css': 'sass/master.scss'
        }
      }
    },

    cssmin: {
      build: {
        src: [
          'build/css/master.css',
          'bower_components/animate.css/animate.min.css'],
        dest: 'build/css/master.min.css'
      }
    },

    //*************
    //JS
    concat: {
      options: {
        separator: ';', sourceMap: true,
      },
      dist: {
        src: [
        'build/js/modernizr-custom.js',
        'js/plugins.js',
        'bower_components/wowjs/dist/wow.min.js',
        'bower_components/fitvids/jquery.fitvids.js' ,
        'bower_components/underscore/underscore.js',
        'js/main.js' ],
        dest: 'build/js/base.js',
      },
    },

    uglify: {
      build: {
        files: {
          'build/js/base.min.js': ['build/js/base.js']
        }
      }
    },

    //*************
    watch: {

      css: {
        files: ['css/sass/*.scss'],
        tasks: ['buildcss']
      }
      //,
      // js: {
      //   files: ['build/js/base.js'],
      //   tasks: ['buildjs']
      // }
    },

    //*************
    cacheBust: {
      files: {
        src: ['index.html']
      }
    },

    //************
    imageoptim: {
      myTask: {
          src: ['img']
        }
    },


    //***************
    pagespeed: {
        options: {
          nokey: true,
          url: "https://developers.google.com"    // @TODO set req data ..
        },
        // prod: {
        //   options: {
        //     url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
        //     locale: "en_GB",
        //     strategy: "desktop",
        //     threshold: 70
        //   }
        // },
        paths: {
          options: {
            paths: ["/speed/docs/insights/v1/getting_started"],
            locale: "en_GB",
            strategy: "desktop",
            threshold: 70
          }
        }
      }


  });

  //run all
  grunt.registerTask('all', ['modernizr', 'buildjs', 'buildcss', 'imageoptim']);
  grunt.registerTask('all--img', ['modernizr', 'buildjs', 'buildcss']);

  //run small tasks:
  grunt.registerTask('build-js-css', ['buildjs', 'buildcss']);
  grunt.registerTask('buildsass', ['buildcss']);
  grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
  grunt.registerTask('buildjs',   ['concat', 'uglify']);
  grunt.registerTask('buildimgs', ['imageoptim']);

};
