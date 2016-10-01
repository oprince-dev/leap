(function() {
  'use strict';

  angular.module('leap')
    .controller('FooterCtrl', function() {
    //// Vars
      const footer = this;
      footer.socmed = [
        "socmed_android.png",
        "socmed_apple.png",
        "socmed_github.png",
        "socmed_instagram.png",
        "socmed_twitter.png",
        "socmed_fb.png",
      ];
      footer.contacts = [
        {head: "Email", info: "team@leap.com"},
        {head: "Phone", info: "(555)-555-5555"},
        {head: "Address", info: "1234 Address Ave Lebanon, KS 66952"}
      ];
    //// Functions
      footer.getImagePath = function(imageName) {
        return "/src/img/socmed/" + imageName;
        };
    });
}());
