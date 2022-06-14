/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    var row = [], col = [], grid = [];
    
    for (var i = 0; i < 9; i++) {
        row[i] = {};
        col[i] = {};
        grid[i] = {};
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var num = board[i][j];
            if (num !== '.') {
                if (row[i][num] || col[j][num] || grid[parseInt(i / 3) * 3 + parseInt(j / 3)][num]) {
                    return false;
                }
                row[i][num] = col[j][num] = grid[parseInt(i / 3) * 3 + parseInt(j / 3)][num] = true;
            }
        }
    }

    return true;

};

const board = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));
