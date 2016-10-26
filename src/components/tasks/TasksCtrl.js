(function() {
  'use strict';

  angular.module('leap')
    .controller('TasksCtrl', function($scope, $location, $firebaseArray) {
      const task = this;
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      $scope.active = $location.path();
      task.showNav = true;

      var taskKey   =   firebase.database().ref('users/' + uid + '/tasks').push().key;
      var tasksRef  =   firebase.database().ref('users/' + uid + '/tasks/' + taskKey);
      var pullRef   =   firebase.database().ref('users/' + uid + '/tasks');

      $scope.pullTasks = $firebaseArray(pullRef);
      console.log($scope.pullTasks);

      task.addTask  =   function() {
        let taskTitle  =  task.task;
        let taskDateTime = task.taskDateTime;

        tasksRef.set({
          taskTitle: taskTitle.toString(),
          taskDateTime: taskDateTime.toString()
        });
      };

    });
}());
