var app = angular.module("gameApp", ["firebase"]);

var ref = new Firebase("https://destinyapp.firebaseio.com/");
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://destinyapp.firebaseio.com/");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
  
  console.log($scope.data);
  // putting a console.log here won't work, see below
});