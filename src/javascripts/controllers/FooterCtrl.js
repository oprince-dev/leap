(function() {
  'use strict';

  angular.module('leap')
    .controller('FooterCtrl', function($scope) {
      $scope.socmed = ["socmed_android.png", "socmed_apple.png", "socmed_github.png", "socmed_instagram.png", "socmed_twitter.png", "socmed_fb.png",];
      $scope.getImagePath = function(imageName) {
        return "/src/img/socmed/" + imageName;
        };
      $scope.contacts = [
                        {head: "Email", info: "team@leap.com"},
                        {head: "Phone", info: "(555)-555-5555"},
                        {head: "Address", info: "1234 Address Ave Lebanon, KS 66952"}
                      ];
    });
}());
