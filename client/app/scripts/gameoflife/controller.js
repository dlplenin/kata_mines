'use strict';

angular.module('GameOfLife')

.controller('gameoflife', function($scope) {
	$scope.controller_loaded = 'GameOfLife loaded!';

    $scope.controller_size=100;
    $scope.game_board = _(_(0).range($scope.controller_size))
    .map(function(num){
        return Math.random() < 0.3 ? 1 : 0;
     });

	$scope.run_next_generation = function(){
		_($scope.game_board).each(get_neighbours, alert)
	};

    function get_neighbours(element, index, array) {
        array[index]=0;
        var a = array.slice(index-($scope.controller_size+1),3); 
        var b = array.slice(index-1,3);
        var c = array.slice(index+($scope.controller_size-1),3);
        console.log( 'a : ' ,a);
        console.log( 'b : ' ,b);
        console.log( 'c : ' ,c);
        console.log('a[' + index + '] = ' + element);
    }

})

.config(function($routeProvider) {
  $routeProvider
    .when('/gameoflife', {
      templateUrl: 'scripts/gameoflife/views/gameoflife.html',
      controller: 'gameoflife'
    });
});