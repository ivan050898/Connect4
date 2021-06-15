
     export const checkAll = (board) => {
        return checkVertical(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkHorizontal(board)
     }

     export const checkVertical = (board) => {
       // Check only if row is 3 or greater
       for (let r = 3; r < 6; r++) {
         for (let c = 0; c < 7; c++) {
           if (board[r][c]) {
             if (board[r][c] === board[r - 1][c] &&
                 board[r][c] === board[r - 2][c] &&
                 board[r][c] === board[r - 3][c]) {
               return board[r][c];    
             }
           }
         }
       }
     }

     
     export const checkHorizontal = (board) =>{
       // Check only if column is 3 or less
       for (let r = 0; r < 6; r++) {
         for (let c = 0; c < 4; c++) {
           if (board[r][c]) {
             if (board[r][c] === board[r][c + 1] && 
                 board[r][c] === board[r][c + 2] &&
                 board[r][c] === board[r][c + 3]) {
               return board[r][c];
             }
           }
         }
       }
   }

   export const checkDiagonalRight = (board) => {
     // Check only if row is 3 or greater AND column is 3 or less
     for (let r = 3; r < 6; r++) {
       for (let c = 0; c < 4; c++) {
         if (board[r][c]) {
           if (board[r][c] === board[r - 1][c + 1] &&
               board[r][c] === board[r - 2][c + 2] &&
               board[r][c] === board[r - 3][c + 3]) {
             return board[r][c];
           }
         }
       }
     }
   }

   export const checkDiagonalLeft = (board) => {
     // Check only if row is 3 or greater AND column is 3 or greater
     for (let r = 3; r < 6; r++) {
       for (let c = 3; c < 7; c++) {
         if (board[r][c]) {
           if (board[r][c] === board[r - 1][c - 1] &&
               board[r][c] === board[r - 2][c - 2] &&
               board[r][c] === board[r - 3][c - 3]) {
             return board[r][c];
           }
         }
       }
     }

   }

   export const checkDraw = (board) => {
       for (let r = 0; r < 6; r++) {
         for (let c = 0; c < 7; c++) {
           if (board[r][c] === 0) {
             return false;
           }
         }
       }
       return true;    
   }