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
    it('debe existir un límite para el juego', function () {
       expect(typeof scope.controller_limit).toBe('number');
    });

    it('el índice 0 de game_array debe retornar el número enviado', function () {
      expect(scope.game_array[0]).toBe(1);
      expect(scope.game_array[1]).toBe(2);
    });

    it('el índice 2 de game_array debe retornar la palabra Fizz', function () {
      expect(scope.game_array[2]).toBe('Fizz');
    });

    it('el índice 4 de game_array retornar la palabra Buzz', function () {
      expect(scope.game_array[4]).toBe('Buzz');
    });

    it('el índice 14 de game_array retornar la palabra Fizz-Buzz', function () {
      expect(scope.game_array[14]).toBe('Fizz-Buzz');
    });

    it('el array resultante debe ser de igual tamaño al límite', function () {
      expect(scope.game_array.length).toBe(scope.controller_limit);
    });

    it('necesito almacenar la respuesta del juego al seleccionar una opción', function () {
      expect(scope.stack_option_response).toEqual([]);
    });

    it('necesto un contador para incrementar con paso de 1', function () {
      expect(scope.game_count).toBe(1);
    });
  });

    describe('When user clic any button', function () {
     it('Should increment scope.game_count 1 step ', function () {
       scope.game_count = 4;
       scope.check_value_option();
       expect(scope.game_count).toBe(5);
      });      

     it('Should add in stack_option_response an object with the response for a number option', function () {
       scope.stack_option_response = [];
       scope.game_count = 1;
       scope.check_value_option(1);
       expect(scope.stack_option_response[0].is_correct).toBe(true);
       expect(scope.stack_option_response[0].current_value).toBe(1);
       expect(scope.stack_option_response[0].selected_option).toBe('#');

       scope.stack_option_response = [];
       scope.game_count = 2;
       scope.check_value_option(2);
       expect(scope.stack_option_response[0].is_correct).toBe(true);
       expect(scope.stack_option_response[0].current_value).toBe(2);
       expect(scope.stack_option_response[0].selected_option).toBe('#');
      });

     it('Should add in stack_option_response an object with the response for a Fizz option', function () {
       scope.stack_option_response = [];
       scope.game_count = 3;
       scope.check_value_option('Fizz');
       expect(scope.stack_option_response[0].is_correct).toBe(true);
       expect(scope.stack_option_response[0].current_value).toBe(3);
       expect(scope.stack_option_response[0].selected_option).toBe('Fizz');
      });

     it('Should add in stack_option_response an object with the response for a Buzz option', function () {
       scope.stack_option_response = [];
       scope.game_count = 3;
       scope.check_value_option('Buzz');
       expect(scope.stack_option_response[0].is_correct).toBe(false);
       expect(scope.stack_option_response[0].current_value).toBe(3);
       expect(scope.stack_option_response[0].selected_option).toBe('Buzz');

       scope.stack_option_response = [];
       scope.game_count = 5;
       scope.check_value_option('Buzz');
       expect(scope.stack_option_response[0].is_correct).toBe(true);
       expect(scope.stack_option_response[0].current_value).toBe(5);
       expect(scope.stack_option_response[0].selected_option).toBe('Buzz');
      });

    it('Should add in stack_option_response an object with the response for a Fizz-Buzz option', function () {
       scope.stack_option_response = [];
       scope.game_count = 15;
       scope.check_value_option('Fizz-Buzz');
       expect(scope.stack_option_response[0].is_correct).toBe(true);
       expect(scope.stack_option_response[0].current_value).toBe(15);
       expect(scope.stack_option_response[0].selected_option).toBe('Fizz-Buzz');
      });

    });
});