'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:ProfilsCtrl
 * @description
 * # ProfilsCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
  .controller('ProfilsCtrl', function ($scope,$http,$log) {
    $scope.title = 'Liste des profils inscrit sur Poweoo.';

    $scope.persons = [];

    $http.get('http://localhost:8080/rest/hello/persons').
      success(function(data) {
        $scope.persons = data;
        $log.debug('debug');

      });
  });
