angular.module("meetMyAmigo").controller("homeCtrl", function ($scope, $state, mainService, autoService, $firebaseArray, $firebaseObject) {

  function done() {
    $scope.amigo={
      nickname:"",
      name:"",
      lastName: "",
      email:"",
      password:"",
      description: {
        about:"",
        from:"",
        gender:""
      },
      picture:"",
    };
  };

  var fb = $firebaseArray(mainService.authRef);

  autoService.authObj.$onAuth(function(authData){
    $scope.authData = authData;
    console.log($scope.authData);
  });

  // this is the logging
  $scope.valid = function () {
    if ($scope.email && $scope.password) {
      // console.log(autoService.authObj);
      autoService.authObj.$authWithPassword({
        email: $scope.email,
        password: $scope.password
      }).catch(function(error){
        console.log(error);
      });
      };
  };

  // this is the signup submit
  $scope.submit = function () {
      autoService.authObj.$createUser({
        email: $scope.amigo.email,
        password: $scope.amigo.password
      }).then(function(response) {
        console.log(response);
        $scope.amigo.uid = response.uid;
        fb.$add($scope.amigo);
        done();
        // $state.go("profile");
      }, function (reason) {
        console.log("no work" + reason);
      });
  };

})
