angular
  .module('VoyageApp')
  .config(AppRoutes)

  function AppRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('loginPage', {
        url: '/',
        templateUrl: './templates/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
      })

      .state('mainPage', {
        url: '/main',
        templateUrl: 'index.html'
      })

      $urlRouterProvider.otherwise('/')
  }
