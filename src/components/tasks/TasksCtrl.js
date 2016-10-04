(function() {
  'use strict';

  angular.module('leap')
    .controller('TasksCtrl', function($scope, $location, $firebaseArray) {
      const task = this;
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      // task.userDB = userObject.getUser();
      task.active = $location.path();
      task.showNav = true;
      console.log(task.showNav);

      $scope.addTask = function(task) {
        var pushTask = $scope.task;
        console.log(pushTask);
        var tasksRef = firebase.database().ref('users/' + uid + '/tasks');
        tasksRef.push(pushTask);
      };

      var tasksRef = firebase.database().ref('users/' + uid + '/tasks');
      $scope.pullTasks  = $firebaseArray(tasksRef);
      console.log($scope.pullTasks);
    });
}());
