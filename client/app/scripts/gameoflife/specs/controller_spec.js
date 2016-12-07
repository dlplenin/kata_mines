'use strict';

describe('Controller: gameoflife', function () {

    beforeEach(module('GameOfLife'));
    beforeEach(module('underscore'));

    var scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('gameoflife', { $scope: scope });
    }));

    describe('On instance', function () {
        it('should set "controller_loaded" variable in scope', function () {
        expect(scope.controller_loaded).toContain('loaded');
        });
    });

    describe('when going to /gameoflife', function () {

        var route, location, rootScope, httpBackend;

        beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
        route = $route;
        location = $location;
        rootScope = $rootScope;
        httpBackend = $httpBackend;

        httpBackend.when('GET', 'scripts/gameoflife/views/gameoflife.html').respond('<div></div>');
        }));

        afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
        });

        it('should use gameoflife.html and controller', function () {
        expect(route.current).toBeUndefined();

        location.path('/gameoflife');

        httpBackend.flush();

        expect(route.current.templateUrl).toBe('scripts/gameoflife/views/gameoflife.html');
        expect(route.current.controller).toBe('gameoflife');
        });

    });

    /*Diego*/
    describe('On instance', function () {
        it('must have a limit to the board', function () {
            expect(typeof scope.board_size).toBe('number');
        });

        it('must exist an array with 1 and 0 numbers in random positions', function () {
            expect(scope.game_board[0][0]).toBeLessThan(2);
            expect(scope.game_board[0][0]).toBeGreaterThan(-1);

            expect(scope.game_board[0][1]).toBeLessThan(2);
            expect(scope.game_board[0][1]).toBeGreaterThan(-1);
            
        });     

    });

    describe('When user clic Nex Generation button', function () {
       
/*       Any live cell with fewer than two live neighbours dies, as if caused by under-population. no importa estado anterior
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by over-population.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.*/



        it('Should Any live cell with fewer than two live neighbours dies, as if caused by under-population.', function () {
            scope.original_game_board = [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ];
            scope.calculate_next_generation(0,1);
            expect(scope.game_board[0][1]).toBe(0);


            scope.original_game_board = [

                [0,   1,   0,   0],
                [0,   0,   1,   1],
                [0,   0,   0,   1],
                [1,   0,   1,   1],
            ];
            scope.calculate_next_generation(0,1);
            expect(scope.game_board[0][1]).toBe(0);
        });

        it('Should Any live cell with two or three live neighbours lives on to the next generation.', function () {
            scope.original_game_board = [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0]
            ];            
            scope.calculate_next_generation(1,0);
            expect(scope.game_board[1][0]).toBe(1);

            scope.original_game_board = [
                [0, 1, 0],
                [1, 1, 0],
                [0, 0, 0]
            ];            
            scope.calculate_next_generation(1,0);
            expect(scope.game_board[1][0]).toBe(1);           

            scope.original_game_board = [
                [0, 1, 0],
                [0, 1, 1],
                [1, 1, 1]
            ];
            scope.calculate_next_generation(0, 1);
            expect(scope.game_board[0][1]).toBe(1);
        });

        it('Should Any live cell with more than three live neighbours dies, as if by over-population.', function () {
            scope.original_game_board = [
                [0, 1, 0],
                [1, 1, 0],
                [1, 1, 0]
            ];            
            scope.calculate_next_generation(1,1);
            expect(scope.game_board[1][1]).toBe(0);            
        });     
        
        iit('should Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', function () {
            scope.original_game_board = [
                [0, 0, 1],
                [0, 1, 1],
                [1, 1, 1]
            ];
            scope.calculate_next_generation(0, 1);
            expect(scope.game_board[0][1]).toBe(1);

            scope.original_game_board = [
                [0, 0, 1],
                [0, 1, 1],
                [1, 1, 1]
            ];
            scope.calculate_next_generation(1, 0);
            expect(scope.game_board[1][0]).toBe(1);         

            scope.original_game_board = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0]
            ];

            scope.calculate_next_generation(2, 1);
            expect(scope.game_board[2][1]).toBe(1);      

        });         

    });
});