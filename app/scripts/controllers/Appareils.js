'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:AppareilsCtrl
 * @description
 * # AppareilsCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
  .controller('AppareilsCtrl', function ($scope,$http,$log) {
    $scope.title = 'Liste des appareils enregistrés dans Poweoo.';

    $scope.persons = [];

    $http.get('http://localhost:8080/rest/hello/Homes').
      success(function(data) {
        $scope.persons = data;
        $log.debug(data);
      });
  });