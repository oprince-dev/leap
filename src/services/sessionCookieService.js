(function() {
  'use strict';

  angular.module('leap')
  .service('sessionCookieService', function($cookies) {
    return {
      setCookieData: function(email, password) {
        var eMail = email;
        var passWord = password;
        $cookies.put("eMail", email);
        $cookies.put("passWord", password);
      },
      getCookieData: function() {
        var pW = $cookies.get("passWord");
        console.log(pW);
        return(pW);
      },
      clearCookiesData: function() {
        eMail = "";
        $cookies.remove("userName");
      }
    };
  });
})();
