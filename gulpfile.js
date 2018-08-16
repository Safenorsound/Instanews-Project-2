
// Modules that you need
var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        browserSync = require('browser-sync'),
        eslint = require('gulp-eslint');
        sass = require("gulp-sass"),
        autoprefixer = require("gulp-autoprefixer"),
        cssnano = require("gulp-cssnano"),
        prettyError = require("gulp-prettyError");

        // babel task
        gulp.task("babel", function() {
        return gulp
        .src('./js/index.js')
        .pipe(babel())
        .pipe(gulp.dest('./build/js/'))
        });
        
        gulp.task(
            'scripts',
            gulp.series('lint', function() {
              return gulp
                .src('./js/*.js')
                .pipe(babel())
                .pipe(uglify())
                .pipe(rename({extname: '.min.js'}))
                .pipe(gulp.dest('./build/js'));
            })
          );

        // Linting Task

// eslint
gulp.task("lint", function(){
    return (gulp
        .src('./js/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
    );
});

gulp.task("scripts", gulp.series( "lint", function(){
    return gulp
        .src("./js/*.js") 
        .pipe(uglify())
        .pipe( rename({ extname: ".min.js"}) )
        .pipe( gulp.dest("./build/js"));
})
);

// Watch task
gulp.task("watch", function(){
gulp.watch("js/*.js", gulp.series("scripts")); 
gulp.watch("sass/**/*.scss",gulp.series("sass"));
});

// Make a browserSync
// Static Server + watching scss/html files
gulp.task('browser-sync', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // Watch Task
    gulp.
    watch(['build/**/*', '*.html'])
        .on('change', browserSync.reload)
});


        //Default task will be to browser-sync and watch
        gulp.task("default", gulp.parallel("browser-sync", "watch")
    );


    // Nav Menu Javascript adpapted from class- code-pen example: $(function() {
//   $('body').addClass('js');
//   var $menu = $('#menu'),
//       $menulink = $('.menu-link');
  
//   $menulink.click(function() {
//     $menulink.toggleClass('active');
//     $menu.toggleClass('active');
//     return false;
//   });
// });