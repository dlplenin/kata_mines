'use strict';

angular.module('Minesweeper')

.controller('minesweeper', function ($scope) {

  $scope.controller_loaded = 'Minesweeper loaded!';

	var matriz = new Array(3);
        matriz[0]=new Array(3); 
        matriz[1]=new Array(3);
        matriz[2]=new Array(3);

       

    matriz[0][0] = '*';
    matriz[2][1] = '*';



	for (var i = 0 ; i < 3; i++) {
		for (var j = 0 ; j < 3; j++) {
			//llenado por defecto las celdas que no son minas
			if(matriz[i][j]!=='*')
			{
				matriz[i][j]=0;
			}
			//llenar siguientes con valor 1 en flas
			if(matriz[i][j-1] === '*')
			{
				if(matriz[i][j]!=='*')
				{
					matriz[i][j]=1;
				}
			}

			//llenar anteriores con valor  n filas
			if(matriz[i][j+1] === '*' && j < 2)
			{
				if(matriz[i][j]!=='*')
				{
					//si hay valor se lo suma
					if(matriz[i][j]!==null && matriz[i][j]!=='*')
					{
						matriz[i][j]+=matriz[i][j];
					}
					matriz[i][j]=1;
				}
			}
		}
	}


	for (var ii = 0 ; ii < 3; ii++) {
		for (var jj = 0 ; jj < 3; jj++) {
			//llenar anteriores con valor  n cols
			if(ii > 0){
				if(matriz[ii-1][jj] === '*' )
				{
					if(matriz[ii][jj]!=='*')
					{
						//si hay valor se lo suma
						if(matriz[ii][jj]!==null && matriz[ii][jj]!=='*')
						{
							matriz[ii][jj]+=matriz[ii][jj];
						}
						matriz[ii][jj]=1;
					}
				}
			}
		}
	}
	console.log(matriz);

	$scope.controller_matriz = matriz;

	

	$scope.getNumber= function (i, j) {


//i = 0;
//j=0;
//matriz[i][j]=0;

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
