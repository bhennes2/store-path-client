var app = angular.module('storePathApp', []);

app.controller('MainCtrl', function($scope){

  $scope.items = [];
  $scope.item = {};

  $scope.addItem = function(e, item){
    e.preventDefault();
    $scope.items.push(item);
    $scope.item = {};
  };

  $scope.removeItem = function(e, index){
    var items = $scope.items.splice(index, 1);
    $scope.items = items;
  };

});
