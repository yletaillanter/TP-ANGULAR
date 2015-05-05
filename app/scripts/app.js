'use strict';

/**
 * @ngdoc overview
 * @name yo2App
 * @description
 * # yo2App
 *
 * Main module of the application.
 */
angular
  .module('yo2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profils', {
        templateUrl: 'views/profils.html',
        controller: 'ProfilsCtrl'
      })
      .when('/foyers', {
        templateUrl: 'views/foyers.html',
        controller: 'FoyersCtrl'
      })
      .when('/appareils', {
        templateUrl: 'views/appareils.html',
        controller: 'AppareilsCtrl'
      })
      .when('/newPerson', {
        templateUrl: 'views/newPerson.html',
        controller: 'newPersonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
