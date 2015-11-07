angular.module("meetMyAmigo", ["ui.router"])
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



//app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
//
//     $httpProvider.interceptors.push('httpRequestInterceptor');
//
//     // routing configuration code
//     $stateProvider
//       .state("home", {
//         url:"/",
//         templateUrl: "js/home/homeTmpl.html",
//         controller: "homeCtrl"
//       })
//       .state("teams", {
//         url: "/teams/:team",
//         templateUrl:"js/teams/teamTmpl.html",
//         controller: "teamCtrl",
//         resolve:{teamData: function ($stateParams, teamService) {
//           return teamService.getTeamData($stateParams.team);
//         }}
//       })
//
//
//     $urlRouterProvider
//       .otherwise("/");
// });
