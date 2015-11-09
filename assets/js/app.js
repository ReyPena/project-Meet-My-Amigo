angular.module("meetMyAmigo", ["ui.router", "firebase"])
.config(function ($stateProvider, $urlRouterProvider) {
  // this are the routes
  $stateProvider
    .state("home",{
      url:"/home",
      templateUrl:"assets/js/home/home.html",
      controller:"homeCtrl"
    })
    // .state("login",{
    //   url:"/login",
    //   templateUrl: "assets/js/home.html"
    // })
    .state("profile",{
      url:"/profile",
      templateUrl: "assets/js/profile/profile.html"
    })
    .state("amigos",{
      url:"/amigos",
      templateUrl: "assets/js/amigos/amigos.html"
    })
    .state("faq",{
      url:"/faq",
      templateUrl: "assets/js/faq/faq.html"
    });

  $urlRouterProvider
    .otherwise("/home");

})
