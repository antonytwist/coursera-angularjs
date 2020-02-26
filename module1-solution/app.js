(function() {
'use strict'
  angular.module('LunchCheckApp', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.resultMessage = '';
    $scope.checkDishes = function() {
      var dishes = $scope.dishes.split(',');
      $scope.resultMessage = (dishes.length > 3) ? 'Too much!' : 'Enjoy!';
    }
  }

})();
