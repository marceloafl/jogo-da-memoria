const cards = document.querySelectorAll('[data-card]');
const victoryModal = document.querySelector('[data-modal="victory"]');
const board = document.querySelector('[data-board]');
const victoryModalCloseBtn = document.querySelector('[data-victory="close"]');
let isThereAFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;
let highlightsCards = 0;
const cardsInGame = 20;

function flipcard(){
    if(lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('card--flip');
    if (!isThereAFlippedCard){
        isThereAFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    isThereAFlippedCard = false;
    
    checkMatchCards();
}

function checkMatchCards(){
    if (firstCard.dataset.card === secondCard.dataset.card ){
        highlightMatches(firstCard);
        highlightMatches(secondCard);
        disablecards();
        checkVictory();
        return;
    }
    unflipCards();
}

function highlightMatches(card){
    highlightsCards += 1;
    card.classList.add('card--highlight')
    card.dataset.match = 'yes';
}

function disablecards(){
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('card--flip');
        secondCard.classList.remove('card--flip');

        resetBoard();
    }, 1200)
}

function resetBoard(){
    [isThereAFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

function checkVictory(){
    console.log(highlightsCards);
    console.log(cardsInGame);
    if (highlightsCards === cardsInGame){
        showVictory();
    }
}

function showVictory(){
    victoryModal.classList.remove('hide');
    board.classList.add('blur');
}

(function shuffleCards(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 20)
        card.style.order = randomPosition;
    })
})()

cards.forEach(function(card){
    card.addEventListener('click', flipcard);
})

victoryModalCloseBtn.addEventListener('click', function(){
    victoryModal.classList.add('hide');
    board.classList.remove('blur');
    document.location.reload();
})