module.exports = function(grunt) {

  "use strict";
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
        'js/modernizr-custom.js',
        'js/plugins.js',
        'bower_components/waitForImages/dist/jquery.waitforimages.js',
        'bower_components/wowjs/dist/wow.min.js',
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
  grunt.registerTask('all', ['buildjs', 'buildcss', 'imageoptim']);
  grunt.registerTask('all--img', [ 'buildjs', 'buildcss']);

  //run small tasks:
  grunt.registerTask('build-js-css', ['buildjs', 'buildcss']);
  grunt.registerTask('buildsass', ['buildcss']);
  grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
  grunt.registerTask('buildjs',   ['concat', 'uglify']);
  grunt.registerTask('buildimgs', ['imageoptim']);
  grunt.registerTask('all--pagespeed', [ 'buildjs', 'buildcss','pagespeed']);


};
