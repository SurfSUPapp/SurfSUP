var angular = require('angular');
var angularRoute = require('angular-route');
var ngMessages = require ('angular-messages')
angular
  .module('surfSup', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: "templates/homepage.html",
      controller: "UserController"
    })
      .when('/login', {
        templateUrl: "templates/login.html",
        controller: "UserController"
      })
      .when('/create', {
        templateUrl: "templates/create.html",
        controller: "UserController"
      });
  });
require('./services/userService.js');
require('./controllers/UserController.js');
