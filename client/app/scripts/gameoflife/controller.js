'use strict';

angular.module('GameOfLife')

.controller('gameoflife', function($scope) {
  $scope.controller_loaded = 'GameOfLife loaded!';
  $scope.board_size = 5;

  $scope.build_board = function(board_size) {
    $scope.board_size = board_size;
    $scope.original_game_board = _(0).range($scope.board_size)
      .map(function() {
        return _(0).range($scope.board_size)
          .map(function() {
            return Math.random() < 0.3 ? 1 : 0;
          });
      });
    $scope.game_board = JSON.parse(JSON.stringify($scope.original_game_board));
  };

  $scope.build_board_pattern = function(option) {

    if (option === 'blinker') {
      $scope.original_game_board = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ];
      $scope.game_board = JSON.parse(JSON.stringify($scope.original_game_board));
    }

    if (option === 'toad') {
      $scope.original_game_board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ];
      $scope.game_board = JSON.parse(JSON.stringify($scope.original_game_board));
    }

    if (option === 'beacon') {
      $scope.original_game_board = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0]
      ];
      $scope.game_board = JSON.parse(JSON.stringify($scope.original_game_board));
    }

    if (option === 'pulsar') {
      $scope.original_game_board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0 ,0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ,0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ,0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ,0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0 ,0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ,0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ,0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],        
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0],        
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0]        
      ];
      $scope.game_board = JSON.parse(JSON.stringify($scope.original_game_board));
    }

    if (option === 'pentadecathlon') {
      $scope.original_game_board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],        
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      $scope.game_board = JSON.parse(JSON.stringify($scope.original_game_board));
    }
    
  };

  $scope.run_next_generation = function() {
    _($scope.original_game_board).each(function(element, index, row) {
      var parent_index = index;
      _(row).each(function(element, index, row) {
        $scope.calculate_next_generation(parent_index, index);
      });
    });
    $scope.original_game_board = JSON.parse(JSON.stringify($scope.game_board));
  };

  $scope.calculate_next_generation = function(row_index, col_index) {
    var temp_value_current_cell = $scope.original_game_board[row_index][col_index];
    $scope.original_game_board[row_index][col_index] = 0;

    var neighbors = [];
    _($scope.original_game_board.slice(Math.max(row_index - 1, 0), row_index + 2))
      .each(function(row) {
        neighbors = neighbors.concat(row.slice(Math.max(col_index - 1, 0), col_index + 2));
      });
    $scope.original_game_board[row_index][col_index] = temp_value_current_cell;

    var total_neighbors = 0;
    total_neighbors = _(neighbors).reduce(function(memo, num) {
      return memo + num;
    }, 0);

    if (total_neighbors < 2 || total_neighbors > 3) {
      $scope.game_board[row_index][col_index] = 0;
    }
    if (total_neighbors === 3) {
      $scope.game_board[row_index][col_index] = 1;
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