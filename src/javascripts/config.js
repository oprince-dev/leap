(function (){
  'use strict';
  angular.module('leap')
    .config(($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: '/src/partials/Land.html',
          controller: 'LandCtrl',
          controllerAs: 'Land'
        })
        .when('/Auth', {
          templateUrl: 'src/partials/Auth.html',
          controller: 'AuthCtrl',
          controllerAs: 'Auth'
        });
      });
}());
