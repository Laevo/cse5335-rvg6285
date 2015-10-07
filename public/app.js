var app = angular.module('myTestApp', []);
app.controller('myController', ['$scope', '$http', function($scope, $http) {
  $scope.clickButton = function() {
    $http.get('test.json').success(function(data) {
        $scope.message = data.msg;
      });
  }
}]);