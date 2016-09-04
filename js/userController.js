angular.module('VoyageApp')
  .controller('UserController', UserController);


  UserController.$inject = ['$http'];
  function UserController($http){
    var self = this;
    self.me = "Adrianna";
    self.all = {};
    self.addUser = addUser;

    $http.get("https://voyage-api.herokuapp.com/api/users")
      .then(function(response) {
        self.all = response.data;
        console.log(response);
      }, function(error) {
        console.log(error)
      });

      function addUser() {
        $http.post("https://voyage-api.herokuapp.com/api/users", self.newUser)
        .then(function(response) {
          self.all.push(response.data);
          self.newUser = {};
        }, function(error) {
          console.log(error)
        });
      }


  }
