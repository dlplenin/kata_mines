'use strict';

angular.module('GameOfLife')

  .controller('gameoflife', function($scope) {
    $scope.controller_loaded = 'GameOfLife loaded!';

    $scope.board_size = 3;
    $scope.game_board = _(0).range($scope.board_size)
        .map(function () {
        // Create one index_row
            return _(0).range($scope.board_size)
                .map(function () {
                    return Math.random() < 0.3 ? 1 : 0;
            });
    });
      
    //console.log($scope.game_board);
    $scope.game_board = [[0, 1, 0], [0, 2, 0], [0, 3, 0]];

    $scope.run_next_generation = function() {
        _($scope.game_board).each(get_neighbours);
    };
      
    function get_neighbours(element, index_row, square_array) {
        // console.log(index_row);
        // console.log(index_row);
        // console.log(array[index_row]);

        // var slices = _(square_array).map(function (array) {
        //     return array.map(function (col) {
        //         console.log('-', array);
        //         return col;
        //     });
        // });

        var slices = _(square_array)
            .slice(Math.max(index_row - 1, 0), index_row + 2)
            .map(function (row) {
                return row;
            });

        

        console.log('top_slice:',slices, 'index_row;', index_row);

    }

  })

  .config(function($routeProvider) {
    $routeProvider
      .when('/gameoflife', {
        templateUrl: 'scripts/gameoflife/views/gameoflife.html',
        controller: 'gameoflife'
      });
  });