'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:FoyersCtrl
 * @description
 * # FoyersCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
  .controller('FoyersCtrl', function ($scope,$http,$log) {
    $scope.title = 'Liste des foyers enregistrés dans Poweoo.';

    $scope.foyers = [];

    $http.get('http://localhost:8080/rest/hello/Homes').
      success(function(data) {
        $scope.foyers = data;
        $log.debug('Hello Debug!');
      });
  });