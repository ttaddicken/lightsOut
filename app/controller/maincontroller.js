app.controller('MainController', function ($scope) {
    $scope.test = "angular works";
    $scope.grid = [];



    $scope.makegrid = function (g) {
        for (var i = 0; i < g; i++) {
            var colum = i
            for (var j = 0; j < g; j++) {
                var row = j
                $scope.grid.push({ colum, row })

            }
        }
    }
    
    Scope.findNeighbor = function (cell,g) {
        // isNorth
        if(cell.col > 0){
            cell.neighbors.push($scope.grid[cell.col-1][cell.row])
        }
        // isSouth
        if(cell.colum<g){
          cell.neighbors.push($scope.grid[cell.col+1][cell.row])  
        }
        // isEast
        if(cell.row <0){
          cell.neighbors.push($scope.grid[cell.col][cell.row-1])  
        }
        // isWest
        if(cell.row <g){
          cell.neighbors.push($scope.grid[cell.col][cell.row+1])  
        }
    }
    for(var row in $scope.grid){
        var currentRow = $scope.grid[row];
        for(var i=0; i<currentRow.length; i++){
            var currentCell = currentRow.length;
            $scope.findNeighbor(cell,currentRow.length)
        }
    }
});