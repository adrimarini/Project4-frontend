angular
   .module("VoyageApp")
   .controller("LoginController", LoginController);

 LoginController.$inject = ["$log", "authService", "userService", "$state"];

 function LoginController($log, authService, userService, $state) {
   var vm = this;
   // BINDINGS
   vm.signUp = {
     // email:    "pj@ga.co",
     // name:     "Philip Hughes",
     // password: "12345",
     // passwordConfirmation: "12345"
   };
   vm.submitSignUp = submitSignUp;
   vm.logIn = {
     // email:    "pj@ga.co",
     // password: "12345"
   };
   vm.authService = authService;
   vm.submitLogIn = submitLogIn;
   vm.conflict = false;

   // FUNCTIONS
   function submitSignUp() {
     userService
       .create(vm.signUp)
       .then(function(res) {
         return authService.logIn(vm.signUp);
       })
       .then(
         // on success
         function(decodedToken) {
           $log.info('Logged in!', decodedToken);
          //  $state.go('mainPage');
         },
         // on error
         function(err) {
           if (err.status === 409) vm.conflict = true;
           $log.info('Error Claire-r:', err);
         }
       );
   }

   function submitLogIn() {
     authService
       .logIn(vm.logIn)
       .then(
         // on success
         function(decodedToken) {
           $log.info('Logged in!', decodedToken);

           location.reload();
          //  this reloads the page once the token is created and stored
           console.log("heyyooo im still here")
          
         },
         // on error
         function(err) {
           $log.info('Error:', err);
         }
       );
   }

   $log.info("SignInController loaded!");
 }
