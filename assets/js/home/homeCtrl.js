angular.module("meetMyAmigo").controller("homeCtrl", function ($scope, $firebaseArray, $firebaseObject) {

  $scope.amigo={
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

  var ref = new Firebase ("https://meetmyamigo.firebaseio.com/app/amigos");
  var fb = $firebaseArray(ref);
  console.log(fb);


  $scope.submit = function () {
    console.log($scope.amigo);
    fb.$add($scope.amigo);
    $scope.amigo=""
  };

})
