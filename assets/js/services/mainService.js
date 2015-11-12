angular.module("meetMyAmigo").service("mainService", function () {
  this.mainUrl = "https://meetmyamigo.firebaseio.com/app";
  this.mainRef = new Firebase(this.mainUrl);
  this.authRef = new Firebase(this.mainUrl + "/amigos");
  this.amigosRef = this.authRef;

})
