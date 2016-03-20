var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    //set up nodemon
    nodemon({
        script: 'index.js',
        ext: 'js html'
    })
    .on('restart', function () {
        console.log('node monitor detected changes, will restart the server'); 
    });
});