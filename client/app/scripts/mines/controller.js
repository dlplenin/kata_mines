'use strict';

angular.module('Minesweeper')

.controller('minesweeper', function ($scope) {

  $scope.controller_loaded = 'Minesweeper loaded!';

	var matriz = new Array(3);
	for (var ii = 0 ; ii < 3; ii++) {
		matriz[ii]=new Array(3);
		for (var jj = 0 ; jj < 3; jj++) {
			 matriz[ii][jj]=0;
		}
	}

    matriz[0][0] = '*';
    matriz[2][1] = '*';

   	var a=0;
	var b=0;
	var c=0;
	var d=0;
	var e=0;
	var f=0;
	var g=0;
	var h=0;

/*
	var matrizNumerica =  matriz.slice(0);
	for (var iii = 0 ; iii < 3; iii++) {
		for (var jjj = 0 ; jjj < 3; jjj++) {
			if(matriz[iii][jjj]==='*')
			{
				matrizNumerica[iii][jjj] = 1;
			}else
			{
				matrizNumerica[iii][jjj] = 0;
			}
		}
	}
	console.log(matrizNumerica);

console.log(matriz);
*/

	var totalNotMines = 0;

	var tamanioMatriz = 3;
	for (var i = 0 ; i < tamanioMatriz; i++) {
		for (var j = 0 ; j < tamanioMatriz; j++) {

			if(matriz[i][j]!=='*')
			{
				totalNotMines=totalNotMines+1;
				a=0;
				b=0;
				c=0;
				d=0;
				e=0;
				f=0;
				g=0;
				h=0;

				if(i-1>=0){
					if(j-1>=0){
						if (matriz[i-1][j-1]==='*')
						{
							a=1;
						}
					}

					if (matriz[i-1][j]==='*')
					{
						b=1;
					}

					if (matriz[i-1][j+1]==='*')
					{
						c=1;
					}
				}

				if(j-1>=0){
					if (matriz[i][j-1]==='*')
					{
						d=1;
					}
				}

				if(j+1<tamanioMatriz){
					if (matriz[i][j+1]==='*')
					{
						e=1;
					}
				}

				if(i+1<tamanioMatriz){
					if(j-1>=0){
						if (matriz[i+1][j-1]==='*')
						{
							f=1;
						}
					}

					if (matriz[i+1][j]==='*')
					{
						g=1;
					}

					if(j+1<tamanioMatriz){
						if (matriz[i+1][j+1]==='*')
						{
							h=1;
						}
					}
				}
				matriz[i][j] = a+b+c+d+e+f+g+h;
			}
		}
	}

	//console.log(matriz);
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


	$scope.getSorrundingMines= function (i, j) {
		return matriz[i][j];
	};

	/*$scope.toogle= function (i, j) {
		var indices=i+j;
		indices.buttonText=toogle?'':getSorrundingMines()
		$scope.visible=!$scope.visible;
	};*/
})




.config(function ($routeProvider) {
  $routeProvider
  .when('/minesweeper', {
    templateUrl: 'scripts/mines/views/minesweeper.html',
    controller: 'minesweeper'
  });
});
