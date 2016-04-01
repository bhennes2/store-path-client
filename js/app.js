var app = angular.module('storePathApp', []);

app.controller('MainCtrl', function($scope){

  $scope.items = [];
  $scope.item = {};

  $scope.today = new Date();

  $scope.addItem = function(e, item){
    e.preventDefault();
    if (item.name.length > 0){
      $scope.items.push(item);
      $scope.item = {};
    }
  };

  $scope.removeItem = function(e, index){
    $scope.items.splice(index, 1);
  };

});
