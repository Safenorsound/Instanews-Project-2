
// Modules that you need
var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        browserSync = require('browser-sync'),
        eslint = require('gulp-eslint');

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
    gulp.watch(["build/js/*.js", "*.html"])
        .on('change', browserSync.reload)

});


        //Default task will be to browser-sync and watch
        gulp.task("default", gulp.parallel("browser-sync", "watch")
    
    );
