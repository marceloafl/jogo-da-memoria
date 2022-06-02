export function removeBoard(level){
    const boardLevel = document.querySelectorAll('[data-board]')

    boardLevel.forEach(function(board){
        if (board.dataset.board !== level){
            board.remove();
        }
    })
}