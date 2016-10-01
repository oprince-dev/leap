(function (){
  'use strict';
  angular.module('leap')
    .config(($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: '/src/partials/Land.html',
          controller: 'LandCtrl',
          controllerAs: 'land'
        })
        .when('/auth', {
          templateUrl: 'src/partials/Auth.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth'
        })
        .when('/home', {
          templateUrl: 'src/partials/Home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .when('/home/tasks', {
          templateUrl: 'src/partials/HomePartials/Tasks.html',
          controller: 'TasksCtrl',
          controllerAs: 'tasks'
        })
        .when('/home/stats', {
          templateUrl: 'src/partials/HomePartials/Stats.html',
          controller: 'StatsCtrl',
          controllerAs: 'stats'
        })
        .when('/home/calendar', {
          templateUrl: 'src/partials/HomePartials/Calendar.html',
          controller: 'CalendarCtrl',
          controllerAs: 'calendar'
        })
        .when('/home/notifications', {
          templateUrl: 'src/partials/HomePartials/Notifications.html',
          controller: 'NotificationsCtrl',
          controllerAs: 'notifications'
        });
      });
}());
