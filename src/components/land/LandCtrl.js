(function() {
  'use strict';

  angular.module('leap')
    .controller('LandCtrl', function($scope, $location) {
    //// Vars
      const land = this;
      land.showNav = true;
      land.showFooter = true;
      land.phonemock = 'src/assets/img/phone-mock.png';
      land.laptopmock = 'src/assets/img/laptop-mock.png';
      land.phrase = 'src/assets/img/phrase.png';
      land.appstore = 'src/assets/img/appstore.svg';
      land.googleplay = 'src/assets/img/googleplay.svg';
      land.sign = "Sign Up";
    //// Functions
      land.toAuth = function() {
        $location.path('auth');
      };
    });
}());
