const gulp = require('gulp');
const imageminPngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');
const rename = require("gulp-rename"); 
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const tinypng = require('gulp-tinypng-compress');
  // 'lxtT-vjkOhfkf0vOEqX2Sr13I4BDYVd3',

let keyIndex = 0;
const keys = [
  'ZqPOkyqpmnmXjH5Rq62AVuZWW4KOyLps',
  'C5gPDe4TCxUb2eTKThpznMaKtEBy9Lci',
  'cJ1V-kEXBYQg3V6LWwjM286yCFOP7oE3',
  'WzzAN0voFWU1tUhHzTmY6e_aiHRk204i'
]
gulp.task('glob', () => {
  var glob = require("glob")
   
  // options is optional 
  glob('src/**/*.{png,jpg}', function (er, files) {
    files.map((el,index,arr)=>{
      gulp.src(el)
        .pipe(tinypng({
            key: keys[keyIndex],
            log: true
        }))
        .pipe(gulp.dest('dist/'));

      if(keyIndex == 3){
        keyIndex=0
      } else {
        keyIndex++
      }
    })
    // files is an array of filenames. 
    // If the `nonull` option is set, and nothing 
    // was found, then files is ["**/*.js"] 
    // er is an error object or null. 
  })
})
gulp.task('glob2', () => {
  var glob = require("glob")
   
  // options is optional 
  glob('src/**/*.{png,jpg}', function (er, files) {
    files.map((el,index,arr)=>{
      gulp.src(el)
        .pipe(gulp.dest('dist2'))
        .pipe(rename((path)=>{
          console.log(path)
        }))
    })
    // files is an array of filenames. 
    // If the `nonull` option is set, and nothing 
    // was found, then files is ["**/*.js"] 
    // er is an error object or null. 
  })
})

gulp.task('img:min', () =>
    gulp.src(['src/**/*.png','src/**/*.jpg'])
        .pipe(imagemin({
          use: [imageminPngquant()],
          plugins: [imageminJpegRecompress({quality:'low' , method:'ms-ssim'})]}
        ))
        .pipe(rename((path=>console.log(path))))
        .pipe(gulp.dest('dist/'))
);


gulp.task('tin', ()=> {
    gulp.src(['src/**/*.png','src/**/*.jpg'])
        .pipe(tinypng({
            key: keys[keyIndex],
            log: true
        }))
        .pipe(rename(()=>{
          if(keyIndex == 3){
            keyIndex=0
          } else {
            keyIndex++
          }
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('img:copy', () =>
    gulp.src(['src/**/*.png','src/**/*.jpg'])
        .pipe(rename((path=>console.log(`${path.dirname+path.basename+path.extname}`))))
        .pipe(gulp.dest('dist2/'))
);
