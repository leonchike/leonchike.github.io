'use strict';

var landingApp = angular.module('kivvikLanding', ['firebase']).config(function($controllerProvider) {
$controllerProvider.allowGlobals();
});

landingApp.controller('IndexController', ['$scope', '$firebase', '$window', 
  function($scope, $firebase, $window) {
    //Code here

  $scope.emails = $firebase(new Firebase('https://kivvik-wealth.firebaseio.com/emails'));


  $scope.signup = function() {
    $scope.emails.$push({emailAddress: $scope.email});
    $scope.email = '';

    $window.location.href = '/signupconfirm.html';
  }
    
  }
]);