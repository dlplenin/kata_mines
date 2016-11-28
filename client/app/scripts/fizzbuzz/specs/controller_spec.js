'use strict';

describe('Controller: fizzbuzz', function () {

  beforeEach(module('FizzBuzz'));
  beforeEach(module('underscore'));

  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('fizzbuzz', { $scope: scope });
  }));

  describe('On instance', function () {
    it('should set "controller_loaded" variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
    });
  });

  describe('when going to /fizzbuzz', function () {

    var route, location, rootScope, httpBackend;

    beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
      route = $route;
      location = $location;
      rootScope = $rootScope;
      httpBackend = $httpBackend;

      httpBackend.when('GET', 'scripts/fizzbuzz/views/fizzbuzz.html').respond('<div></div>');
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should use fizzbuzz.html and controller', function () {
      expect(route.current).toBeUndefined();

      location.path('/fizzbuzz');

      httpBackend.flush();

      expect(route.current.templateUrl).toBe('scripts/fizzbuzz/views/fizzbuzz.html');
      expect(route.current.controller).toBe('fizzbuzz');
    });

  });

  /*Diego*/
  describe('On instance', function () {
    iit('debe existir un límite para el juego', function () {
      expect(scope.controller_limit).not.toBeUndefined();
    });
  });

  describe('On instance', function () {
    iit('el número 1 debe retornar 1', function () {
      expect(scope.FizzBuzz_evaluation(1)).toBe(1);
    });
  });

  describe('On instance', function () {
    iit('el número 3 debe retornar Fizz', function () {
      expect(scope.FizzBuzz_evaluation(3)).toBe('Fizz');
    });
  });

  describe('On instance', function () {
    iit('el número 3 debe retornar Fizz', function () {
      expect(scope.FizzBuzz_evaluation(5)).toBe('Buzz');
    });
  });

  describe('On instance', function () {
    iit('el número 3 debe retornar Fizz', function () {
      expect(scope.FizzBuzz_evaluation(15)).toBe('Fizz-Buzz');
    });
  });  

  describe('On instance', function () {
    iit('el array resultante debe ser de igual tamaño al límite', function () {
      expect(scope.game_array.length).toBe(scope.controller_limit);
    });
  }); 

});