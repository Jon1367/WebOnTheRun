// create our angular module and inject firebase
var app = angular.module('gameApp', ['firebase']);

  
app.controller("SampleCtrl", ["$scope", "$timeout", "$window", function($scope, $timeout, $window) {
  // create a reference to our Firebase database
  var ref = new $window.Firebase("https://destinyapp.firebaseio.com/");
  // read data from the database into a local scope variable
  ref.on("value", function(snapshot) {
    // Since this event will occur outside Angular's $apply scope, we need to notify Angular
    // each time there is an update. This can be done using $scope.$apply or $timeout. We
    // prefer to use $timeout as it a) does not throw errors and b) ensures all levels of the
    // scope hierarchy are refreshed (necessary for some directives to see the changes)
    $timeout(function() {
      $scope.data = snapshot.val();
      console.log($scope.data);
    });
  });
}]);