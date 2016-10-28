'use strict';

describe('Controller: minesweeper', function () {

  beforeEach(module('Minesweeper'));
  beforeEach(module('underscore'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('minesweeper', { $scope: scope });
  }));

  describe('On instance', function () {
    it('should set "controller_loaded" variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
    });
  });


/*Diego*/
  describe('On instance', function () {
    it('debe existir una matriz 3x3', function () {
      //console.log(scope.controller_matriz.length);
      expect(scope.controller_matriz.length).toBe(3);
    });
  });

  describe('On instance', function () {
    it('la matriz 3x3 debe contener 2 minas "*"', function () {
      //console.log(scope.controller_matriz[0]);
      expect(scope.controller_matriz[0][0]).toBe('*');
      expect(scope.controller_matriz[2][1]).toBe('*');
    });
  });

  describe('On instance', function () {
    it('la posición selecccionada no tiene una mina "*"', function () {
      expect(scope.getNumber(0,1)).toBe(1);
    });
  });

  describe('On instance', function () {
    it('la posición selecccionada retorna el número de minas alrededor', function () {
      expect(scope.getNumber(0,2)).toBe(0);
    });
  });

  describe('On instance', function () {
    it('la posición selecccionada retorna 2', function () {
      //expect(scope.getNumber(1,0)).toBe(2);
    });
  });


/*Diego*/

  describe('when going to /minesweeper', function () {

    var route, location, rootScope, httpBackend;

    beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
      route = $route;
      location = $location;
      rootScope = $rootScope;
      httpBackend = $httpBackend;

      httpBackend.when('GET', 'scripts/mines/views/minesweeper.html').respond('<div></div>');
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should use minesweeper.html and controller', function () {
      expect(route.current).toBeUndefined();

      location.path('/minesweeper');

      httpBackend.flush();

      expect(route.current.templateUrl).toBe('scripts/mines/views/minesweeper.html');
      expect(route.current.controller).toBe('minesweeper');
    });
  });

});
