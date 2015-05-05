'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:newPersonCtrl
 * @description
 * # newPersonCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
.controller('newPersonCtrl', function ($scope, $http) {
  $scope.title = 'Ajout d\'une personne';
  $scope.reponse = '';

  $scope.update = function(person) {
      $scope.reponse = 'Envoie des données';

    $http.post('http://localhost:8080/rest/hello/insererpersonne', person).
      success(function() {
      // this callback will be called asynchronously
      // when the response is available
        $scope.reponse = 'la personne est enregistré, vous devriez allez voir la liste pour voir par vous-même';
      }).
      error(function() {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
          $scope.reponse = 'Une erreur est apparue, avez-vous bien le rest qui tourne sur localhost:8080 ? Si non, allez voir dans le code pour changer l\'url';

      });
  };
});