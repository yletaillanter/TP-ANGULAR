'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
