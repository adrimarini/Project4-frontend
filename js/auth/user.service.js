(function () {
  'use strict';

  angular
    .module('VoyageApp')
    .factory("userService", userService);

  userService.$inject = ["$log", "$http"];

  function userService($log, $http) {
    $log.info("user service loaded!");

    var service = {
      create: create
    };
    return service;

    function create(data) {
      var promise = $http({
        method: 'POST',
        url:    'https://voyage-api.herokuapp.com/api/users',
        data:   data
      });

      return promise;
    }
  }

})();
