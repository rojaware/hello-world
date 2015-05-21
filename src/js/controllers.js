'use strict';
// var myapp = angular.module("myApp", []);
// myapp.controller('helloWorldCtrl', function ($scope) {
//     $scope.name = { first: "Scott", last:"Lee"};
// });

 angular.module('myApp.controllers', []).
    controller('helloWorldCtrl', function ($scope) {
        $scope.name = { first: "Scott", last:"Lee"};
    });

 