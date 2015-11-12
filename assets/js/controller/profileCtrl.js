angular.module("meetMyAmigo").controller("profileCtrl", function ($scope, autoService, mainService, $firebaseArray, $firebaseObject) {

  var amigos = $firebaseArray(mainService.amigosRef);

  $scope.authData = autoService.authObj.$getAuth();

  autoService.authObj.$onAuth(function(authData){
    $scope.authData = authData;
    console.log(autoService.authData);
  });

  $scope.dataAmigos = $scope.authData;

  function amigoLocate() {
    if ($scope.dataAmigos) {
      for (var i = 0; i < amigos.length; i++) {
        if (amigos[i].uid === $scope.authData.uid) {
          $scope.amigo = amigos[i];
          break;
        }
      }
    }
  }

  amigos.$loaded().then(function() {
    amigoLocate();
  });



  console.log($scope.dataAmigos);
  // pull data
  // authData
});
