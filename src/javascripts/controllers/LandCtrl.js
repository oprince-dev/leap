(function() {
  'use strict';

  angular.module('leap')
    .controller('LandCtrl', function($scope, $location) {
    //// Vars
      const land = this;
      land.showNav = true;
      land.showFooter = true;
      land.phonemock = '/src/img/phone-mock.png';
      land.laptopmock = '/src/img/laptop-mock.png';
      land.phrase = '/src/img/phrase.png';
      land.appstore = '/src/img/appstore.svg';
      land.googleplay = '/src/img/googleplay.svg';
      land.sign = "Sign Up";
    //// Functions
      land.toAuth = function() {
        $location.path('auth');
      };
    });
}());
