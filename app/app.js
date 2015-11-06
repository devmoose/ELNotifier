'use strict';

// Declare app level module which depends on views, and components
angular.module('extralife', ['ngRoute', 'extralife.notifier']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/notifier'});
}]);
