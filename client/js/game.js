var app = angular.module("gameApp", ["firebase"]);


app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://destinyapp.firebaseio.com/");
  // download the data into a local object
  console.log('Hello');
  $scope.playerOne = 'asdf';
  $scope.playerTwo = 'saf';
  var data = $firebaseObject(ref);
  data.$loaded().then(function (){

      console.log($scope.data);
  });
        $scope.data = data;
});

  

  

