angular.module("meetMyAmigo").controller("amigosCtrl", function ($scope, mainService, autoService, $firebaseArray, $firebaseObject) {

  $scope.amigos = $firebaseArray(mainService.amigosRef);
  console.log($scope.amigos);

})
