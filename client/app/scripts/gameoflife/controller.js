'use strict';

angular.module('GameOfLife')

  .controller('gameoflife', function($scope) {
    $scope.controller_loaded = 'GameOfLife loaded!';

    $scope.board_size = 3;
    $scope.original_game_board = _(0).range($scope.board_size)
        .map(function () {
        // Create one index_row
            return _(0).range($scope.board_size)
                .map(function () {
                    return Math.random() < 0.3 ? 1 : 0;
            });
        });
      
    $scope.game_board = _($scope.original_game_board).clone();

    $scope.run_next_generation = function (row_index, col_index) {
         $scope.game_board[row_index][col_index] = 0;
         var neighbors = [];
         console.log($scope.original_game_board);
        _($scope.original_game_board.slice(0, col_index + 1)).each(function (row) {
            neighbors = neighbors.concat(row.slice(0, col_index + 2));
        });
        //console.log(neighbors);

        var total_neighbors = 0;
        total_neighbors = _(neighbors).reduce(function (memo, num) {
            return memo + num;
        }, 0);




        if (total_neighbors === 3) {
            $scope.game_board[row_index][col_index] = 1;
        }
        if (total_neighbors > 3) {
            $scope.game_board[row_index][col_index] = 0;
        }
    };
  })

  .config(function($routeProvider) {
    $routeProvider
      .when('/gameoflife', {
        templateUrl: 'scripts/gameoflife/views/gameoflife.html',
        controller: 'gameoflife'
      });
  });