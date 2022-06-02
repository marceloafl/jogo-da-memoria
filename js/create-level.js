export function createBoard(level){
    const board = document.createElement('section');
    board.classList.add('board');
    board.dataset.board = level;
    return board;
}

export function createCard(cardType){
    const card = document.createElement('div');
    card.classList.add('card--wrapper');
    card.dataset.card = cardType;
    return card;
}

export function createFrontImg(cardType){
    const imgFront = document.createElement('img');
    imgFront.classList.add('card--front');
    imgFront.src = `assets/img/${cardType}.png`;
    imgFront.alt = 'Frente da carta';
    imgFront.dataset.card = 'front';
    return imgFront;
}

export function createBackImg(){
    const imgBack = document.createElement('img');
    imgBack.classList.add('card--back');
    imgBack.src = 'assets/img/verso.png';
    //imgBack.src = 'assets/img/verso.jpeg';
    imgBack.alt = 'Verso da carta';
    imgBack.dataset.card = 'back';
    return imgBack;
}







