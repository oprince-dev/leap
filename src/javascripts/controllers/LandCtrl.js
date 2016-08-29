(function() {
  'use strict';

  angular.module('leap')
    .controller('LandCtrl', function($scope, $location) {
      $scope.toAuth = function() {
        $location.path('Auth');
      };
      $scope.phonemock = '/src/img/phone-mock.png';
      $scope.laptopmock = '/src/img/laptop-mock.png';
      $scope.phrase = '/src/img/phrase.png';
      $scope.appstore = '/src/img/appstore.svg';
      $scope.googleplay = '/src/img/googleplay.svg';
      $scope.sign = "Sign Up";
    });
}());
