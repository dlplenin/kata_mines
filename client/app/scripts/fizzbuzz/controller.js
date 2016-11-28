'use strict';

angular.module('FizzBuzz')

.controller('fizzbuzz', function($scope) {

	$scope.controller_loaded = 'FizzBuzz loaded!';
	$scope.controller_limit = 100;
	$scope.showCheat = false;
	$scope.FizzBuzz_evaluation = function(number) {
		var fizz_value = (number%3?'':'Fizz');
		return (fizz_value + (fizz_value?(number%5?'':'-Buzz'):(number%5?'':'Buzz')))||number;
	};
	var game_array = _(_.range(1, $scope.controller_limit + 1))
		.map(function(number){
 			return $scope.FizzBuzz_evaluation(number);
 	});
	$scope.game_array = game_array;


	$scope.div_array = [];
	$scope.count = 1;
	$scope.addDiv = function(option) {
    	var current_div = {
      		ok: option===$scope.FizzBuzz_evaluation($scope.count)?'Acierto':'Error',    		
      		current_value: $scope.count++
    	}
    	$scope.div_array.push(current_div);
	}

})

.config(function($routeProvider) {
  $routeProvider
    .when('/fizzbuzz', {
      templateUrl: 'scripts/fizzbuzz/views/fizzbuzz.html',
      controller: 'fizzbuzz'
    });
});