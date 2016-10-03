(function (){
  'use strict';
  angular.module('leap')
    .config(($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: '/src/components/land/Land.html',
          controller: 'LandCtrl',
          controllerAs: 'land'
        })
        .when('/auth', {
          templateUrl: 'src/components/auth/Auth.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth'
        })
        .when('/home', {
          templateUrl: 'src/components/home/Home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home',
          resolve: {
            checkUserAuth: function(authCheck) {
              return authCheck.checkUserAuth();
            }
          }
        })
        .when('/home/tasks', {
          templateUrl: 'src/components/tasks/Tasks.html',
          controller: 'TasksCtrl',
          controllerAs: 'tasks',
          resolve: {
            checkUserAuth: function(authCheck) {
              return authCheck.checkUserAuth();
            }
          }
        })
        .when('/home/stats', {
          templateUrl: 'src/components/stats/Stats.html',
          controller: 'StatsCtrl',
          controllerAs: 'stats',
          resolve: {
            checkUserAuth: function(authCheck) {
              return authCheck.checkUserAuth();
            }
          }
        })
        .when('/home/calendar', {
          templateUrl: 'src/components/calendar/Calendar.html',
          controller: 'CalendarCtrl',
          controllerAs: 'calendar',
          resolve: {
            checkUserAuth: function(authCheck) {
              return authCheck.checkUserAuth();
            }
          }
        })
        .when('/home/notifications', {
          templateUrl: 'src/components/notifications/Notifications.html',
          controller: 'NotificationsCtrl',
          controllerAs: 'notifications',
          resolve: {
            checkUserAuth: function(authCheck) {
              return authCheck.checkUserAuth();
            }
          }
        })
        .otherwise('/');
      });
}());
