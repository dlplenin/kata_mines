'use strict';

angular.module('Minesweeper')

.controller('minesweeper', function ($scope) {

  	$scope.controller_loaded = 'Minesweeper loaded!';

  	//ToDo: recibir valor desde el usuario
	var tamanioMatriz = 3;

	var totalNotMines = 0;

  	//matriz inicial con valores 0
	var matriz = new Array(tamanioMatriz);
	for (var ii = 0 ; ii < tamanioMatriz; ii++) {
		matriz[ii]=new Array(tamanioMatriz);
		for (var jj = 0 ; jj < tamanioMatriz; jj++) {
			 matriz[ii][jj]=0;
		}
	}

	//selección de posiciones con minas
	//ToDo: asignación de n minas en posiciones randómicas
    	matriz[0][0] = '*';
    	matriz[2][1] = '*';
    

	//matriz de 1 y 0 para conteo interno de minas
	var matrizNumerica =  JSON.parse(JSON.stringify(matriz));
	for (var iii = 0 ; iii < tamanioMatriz; iii++) {
		for (var jjj = 0 ; jjj < tamanioMatriz; jjj++) {
			if(matriz[iii][jjj]==='*')
			{
				matrizNumerica[iii][jjj] = 1;
			}
		}
	}

	//Conteo de minas en celdas circundantes
	// |a|b|c|
	// |d|?|e|
	// |f|g|h|
	for (var i = 0 ; i < tamanioMatriz; i++) {
		for (var j = 0 ; j < tamanioMatriz; j++) {

			if(matriz[i][j]!=='*')
			{
				totalNotMines=totalNotMines+1;

				if(i-1>=0){
					if(j-1>=0){
						matriz[i][j]+=matrizNumerica[i-1][j-1];//a
					}
					matriz[i][j]+=matrizNumerica[i-1][j];//b
					if(j+1<tamanioMatriz){
						matriz[i][j]+=matrizNumerica[i-1][j+1];//c
					}
				}
				if(j-1>=0){
					matriz[i][j]+=matrizNumerica[i][j-1];//d
				}
				if(j+1<tamanioMatriz){
					matriz[i][j]+=matrizNumerica[i][j+1];//e
				}
				if(i+1<tamanioMatriz){
					if(j-1>=0){
						matriz[i][j]+=matrizNumerica[i+1][j-1];//f
					}
					matriz[i][j]+=matrizNumerica[i+1][j];//g

					if(j+1<tamanioMatriz){
						matriz[i][j]+=matrizNumerica[i+1][j+1];//h
					}
				}
			}
		}
	}

	$scope.controller_matriz = matriz;
	$scope.showContent=false;
	$scope.showCheat=false;
	$scope.totalNotMines = totalNotMines; 
	$scope.coutNotMines=0;
	$scope.message='';
	$scope.disableGame =false;


	$scope.isMine= function (i, j) {
		if(matriz[i][j]==='*')
		{
			$scope.message='Juego perdido';
			$scope.disableGame =true;
			return true;
		}
		else
		{
			$scope.coutNotMines += 1;
			if($scope.totalNotMines===$scope.coutNotMines)
			{
				$scope.message='Ganaste con '+ $scope.coutNotMines + ' acierto(s)';
				$scope.disableGame =true;
			}
			else
			{
				$scope.message='Vas '+ $scope.coutNotMines + ' acierto(s)';
			}
			return false;
		}
	};


	$scope.getSurroundingMines= function (i, j) {
		return matriz[i][j];
	};
})

.config(function ($routeProvider) {
  $routeProvider
  .when('/minesweeper', {
    templateUrl: 'scripts/mines/views/minesweeper.html',
    controller: 'minesweeper'
  });
});
