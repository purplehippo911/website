import gulp from "gulp";
import imagemin from "gulp-imagemin";
import prefix from "gulp-autoprefixer";
import minify from "gulp-clean-css";
import terser from "gulp-terser";

async function message() {
    console.log("Gulp is starting");
};

// optimize images
async function imageMin() {
  gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('assets/images'));
};

async function screenshotsMin() {
    gulp.src('src/screenshots/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/screenshots'));
};

// minify and prefix css
async function cssMinify() {
    gulp.src('src/*.css')
        .pipe(prefix())
        .pipe(minify())
        .pipe(gulp.dest('assets'));
};

// minify js
async function jsMinify() {
    gulp.src('src/*.js')
        .pipe(terser())
        .pipe(gulp.dest('assets'));
};

async function watchTask() {
    gulp.watch('src/images/*', imageMin);
    gulp.watch('src/*.css', cssMinify);
    gulp.watch('src/*.js', jsMinify);
};

gulp.task('default', gulp.series(message, imageMin, screenshotsMin, cssMinify, jsMinify, watchTask));