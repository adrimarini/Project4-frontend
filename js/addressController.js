angular.module('VoyageApp')
  .controller('AddressController', AddressController);

  AddressController.$inject = ['$http'];
  function AddressController($http){
    var self = this;
    self.color = "blue";
    self.all = [];
    self.addAddress = addAddress;
    self.deleteAddress = deleteAddress;


    $http.get("https://voyage-api.herokuapp.com/api/addresses")
      .then(function(response) {
        self.all = response.data;
        console.log(response);
      }, function(error) {
        console.log(error)
      });

    function addAddress() {
      $http.post("https://voyage-api.herokuapp.com/api/addresses", self.newAddress)
      .then(function(response) {
        self.all.push(response.data);
        self.newAddress = {};
      }, function(error) {
        console.log(error)
      });
    }

    function deleteAddress(address) {
      console.log(address._id);
      $http.delete("https://voyage-api.herokuapp.com/api/addresses"+address._id)
      .then(function() {
        self.all.splice(self.all.indexOf(address), 1);
      })
    }



  }
