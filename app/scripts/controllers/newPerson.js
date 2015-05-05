'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:newPersonCtrl
 * @description
 * # newPersonCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
.controller('newPersonCtrl', function ($scope, $http, $log) {
  $scope.title = 'Ajout d\'une personne';
  $scope.reponse = '';

  $scope.update = function(person) {
      $scope.reponse = 'Envoie des données';

    $http.post('http://localhost:8080/rest/hello/insererpersonne', person).
      success(function() {
        $log.reponse = 'Enregistrement OK';
      }).
      error(function() {
        $log.debug = 'Error';
      });
  };
});