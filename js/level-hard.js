import{ createBoard, createCard, createFrontImg, createBackImg } from './create-level.js';
const boardWrapper = document.querySelector('[data-wrapper]');

export function createLevelHard(){
    const board = createBoard('hard');
    boardWrapper.appendChild(board)

    createCards('html', board);
    createCards('html', board);

    createCards('css', board);
    createCards('css', board);

    createCards('javascript', board);
    createCards('javascript', board);
    
    createCards('react', board);
    createCards('react', board);
    
    createCards('github', board);
    createCards('github', board);

    createCards('git', board);
    createCards('git', board);

    createCards('sql', board);
    createCards('sql', board);

    createCards('java', board);
    createCards('java', board);
    
    createCards('spring', board);
    createCards('spring', board);

    createCards('qa', board);
    createCards('qa', board);

    return board;
}

function createCards(typeOfCard, board){
    const card = createCard(typeOfCard);
    const cardImg = createFrontImg(typeOfCard);
    const cardImgBack = createBackImg();

    card.appendChild(cardImg);
    card.appendChild(cardImgBack);

    board.appendChild(card);
}