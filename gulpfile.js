const gulp from 'gulp')
const babel from 'gulp-babel')
const eslint from 'gulp-eslint')

gulp.task('default', () =>
  gulp.src('src/**/*.js')
    /*
     * Babel
     */
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
    /*
     * ESLint
     */
    .pipe(eslint({
      useEslintrc: true,
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)
