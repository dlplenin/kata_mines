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
            expect(typeof scope.controller_size).toBe('number');
        });

        it('must exist an array with 1 and 0 numbers in random positions', function () {
            scope.game_board[0]=0;
            scope.game_board[1]=1;
            expect(scope.game_board[0]).toBe(0);
            expect(scope.game_board[1]).toBe(1);
        });     

    });

    describe('When user clic Play button', function () {
       
        it('should KILL current Cell if it has fewer than two live neighbours (by under-population)', function () {
            scope.game_board=[0,1,0,0,1,0,0,1,0];
            //scope.game_board[1]=0;
            scope.run_next_generation();
            expect(scope.game_board[1]).toBe(0);
        });

        it('should STAY ALIVE current Cell if it is alive and has two or three live neighbours ', function () {

        });

        it('should STAY ALIVE current Cell if it has two or three live neighbours (by over-population) ', function () {

        });        

        it('should become a LIVE current Cell if it has exactly three live neighbours (by reproduction) ', function () {

        });        

    });
});