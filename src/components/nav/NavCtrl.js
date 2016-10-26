(function() {
  'use strict';
  angular.module('leap')
    .controller('NavCtrl', function($rootScope, $scope, $location, authService, authCheck) {
    //// Vars
      $scope.$on('$locationChangeSuccess', function() {
        nav.loginSwitchCheck();
      });
      const nav = this;
      nav.logo = "leap";
      nav.logout = "Logout";
      nav.login = "Login";
      nav.dropdownToggle = false;
      nav.dropdownItems = [
        {route: 'settings', name: 'Settings'},
        {route: 'auth', name: 'Auth'}
      ];
    //// Functions
      nav.loginSwitchCheck = function() {
        if($location.path() == '/auth' && '/') {
          return true;
        } else {
          return false;
        }
      };

      nav.navigate = function(route) {
        if (route == 'land') {
          $location.path('/');
        }
        else if (route == 'auth') {
          $location.path('auth');
        }
        else if (route == 'settings') {
          $location.path('settings');
        }
      };
      nav.logoutUser = function() {
        authService.logoutUser();
      };
    });
}());
