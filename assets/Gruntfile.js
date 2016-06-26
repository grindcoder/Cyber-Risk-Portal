module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/libs/**/*.js','src/components/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
	sass: {                              // Task
		dist: {                            // Target
		  options: {                       // Target options
			style: 'expanded'
		  },
		  files: {                         // Dictionary of files
			'../css/cyber-risk-portal.css': 'sass/materialize.scss',       // 'destination': 'source'

		  }
		}
	},	
	
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '../js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
	
	/*
    jshint: {
      files: ['Gruntfile.js', 'src//*.js', 'test//*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
	
	*/
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  //grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', [ 'concat', 'sass', 'uglify']);

};