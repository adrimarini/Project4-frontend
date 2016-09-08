angular
  .module('VoyageApp')
  .config(AppRoutes)

  function AppRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
      // .state('loginPage', {
      //   url: '/',
      //   templateUrl: './templates/login.html',
      //   controller: 'LoginController',
      //   controllerAs: 'vm'
      // })

      .state('mainPage', {
        url: '/main',
        templateUrl: './templates/main.html',
        controller: "AddressController",
        controllerAs: "addressCtrl"
      })

      $urlRouterProvider.otherwise('/')
  }
