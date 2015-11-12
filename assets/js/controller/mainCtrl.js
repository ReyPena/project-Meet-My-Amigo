angular.module("meetMyAmigo").controller("mainCtrl", function ($scope, mainService, autoService) {
  $scope.noNow = true;

  $scope.signout = function() {
    autoService.authObj.$unauth();
    console.log(autoService.authObj);
    console.log(autoService.authObj.$getAuth());
  };

  autoService.authObj.$onAuth(function(authData){
    $scope.authData = authData;
    // console.log($scope.authData);
  });
})
