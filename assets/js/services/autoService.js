angular.module("meetMyAmigo").service("autoService", function ($firebaseAuth, mainService) {
  this.authObj = $firebaseAuth(mainService.authRef);
  this.authData;
});
