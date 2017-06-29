var gulp = require('gulp');
var jScrambler = require('gulp-jscrambler');
var dateTime = new Date();

gulp.task('default', function() {
  gulp.src('./UnprotectedApp/JscramblerProject/app/*.js').pipe(gulp.dest('./UnprotectedApp/Original/JscramblerProject_' + dateTime.toUTCString()));

  gulp.src('./UnprotectedApp/JscramblerProject/app/*.js').pipe(jScrambler({
    "keys": {
      "accessKey": "XXXX",
      "secretKey": "YYYY"
    },
    "applicationId": "ZZZZ",
    "params": [
      {
        name: 'stringConcealing'
      }, {
        name: 'stringEncoding',
        options: {
          freq: 1,
          min: 1,
          max: 1
        }
      }, {
        name: 'identifiersRenaming'
      }
    ],
    "areSubscribersOrdered": false,
    "applicationTypes": {
      "webBrowserApp": false,
      "desktopApp": false,
      "serverApp": false,
      "hybridMobileApp": false,
      "javascriptNativeApp": false,
      "html5GameApp": false
    },
    "languageSpecifications": {
      "es5": true,
      "es6": false,
      "es7": false
    }
  })).pipe(gulp.dest('.'));
});
