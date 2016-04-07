'use strict';

// Declare app level module which depends on views, and components
angular.module('generateName', [
  'ngRoute',
  'generateName.generator',
  'generateName.factories.chinois'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/generator'});
}]);
