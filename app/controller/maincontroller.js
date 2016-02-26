app.controller('MainController', function ($scope) {
    $scope.test = "angular works";
    $scope.grid = [];
    $scope.limit= 0;



    $scope.makegrid = function (g) {
        for (var i = 0; i < g; i++) {
            var colum = i
            $scope.grid[colum] = [];
            for (var j = 0; j < g; j++) {
                var row = j
                $scope.grid[colum].push({ neighbors: [], colum: colum, row: row })
            }
        }
        g = g-1;
        for (var rownum in $scope.grid) {
            var currentRow = $scope.grid[rownum];
            for (var i = 0; i < currentRow.length; i++) {
                var currentCell = currentRow[i];
                $scope.findNeighbor(currentCell, g)
            }
        }
    }

    $scope.findNeighbor = function (cell, g) {
        // isNorth
        if (cell.colum > 0) {
            console.log('Going North', cell)
            cell.neighbors.push($scope.grid[cell.colum - 1][cell.row])
        }
        // isSouth
        if (cell.colum < g) {
            console.log('Going south', cell)            
            cell.neighbors.push($scope.grid[cell.colum + 1][cell.row])
        }
        // isEast
        if (cell.row > 0) {
            console.log('Going East', cell)            
            cell.neighbors.push($scope.grid[cell.colum][cell.row - 1])
        }
        // isWest
        if (cell.row < g) {
            console.log('Going West', cell)            
            cell.neighbors.push($scope.grid[cell.colum][cell.row + 1])
        }
    }

    $scope.selectCell = function (cell) {
        cell.isOn = !cell.isOn;
        for (var i = 0; i < cell.neighbors.length; i++) {
            cell.neighbors[i].isOn = !cell.neighbors[i].isOn;
        }

    }
});