var app = window.angular.module('myApp', ['ngMaterial', 'ngRoute']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            //controller: 'loginController',
            templateUrl: 'views/login.html'
        })
        .otherwise({ 
            redirectTo: '/' 
        }); 
});