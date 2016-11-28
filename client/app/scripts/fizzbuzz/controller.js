'use strict';

angular.module('FizzBuzz')

.controller('fizzbuzz', function($scope) {

	$scope.controller_loaded = 'FizzBuzz loaded!';
	$scope.controller_limit = 100;
	$scope.showCheat = false;
	$scope.game_array = _(1).chain()
	.range($scope.controller_limit + 1)
	.map(function(number){
 		return FizzBuzz_evaluation(number);
 	})
	.value();

	$scope.stack_option_response = [];
	$scope.game_count=1;
	$scope.check_value_option = function(option){
		$scope.stack_option_response.push({
			is_correct: option===FizzBuzz_evaluation($scope.game_count),
			selected_option: typeof option === 'number'?'#':option,
			current_value: $scope.game_count
		});
		$scope.game_count++;
	};

	function FizzBuzz_evaluation(number) {
		var responses = []; 
		if(!(number%3))
		{
			responses.push('Fizz');
		}
		if(!(number%5))
		{
			responses.push('Buzz');
		}				
		return responses.join('-')||number;		
	}
})

.config(function($routeProvider) {
  $routeProvider
    .when('/fizzbuzz', {
      templateUrl: 'scripts/fizzbuzz/views/fizzbuzz.html',
      controller: 'fizzbuzz'
    });
});