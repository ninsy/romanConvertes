var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("watchIt!", function() {
  gulp.watch("./src/RomanNumeralHelper.js", ["transpile"]);
})

gulp.task("transpile", function() {
  return gulp.src("src/RomanNumeralHelper.js")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest("dist"))
});

gulp.task("serve", ["watchIt!"]);