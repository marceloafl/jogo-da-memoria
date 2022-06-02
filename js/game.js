import { checkVictory } from './level-selector.js';

const cards = document.querySelectorAll('[data-card]');
let isThereAFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;
let highlightsCards = 0;

export function flipcard(card){
    if(lockBoard) return;
    if (card === firstCard) return;
    card.classList.add('card--flip');
    if (!isThereAFlippedCard){
        isThereAFlippedCard = true;
        firstCard = card;
        return;
    }

    secondCard = card;
    isThereAFlippedCard = false;
    
    checkMatchCards();
}

function checkMatchCards(){
    if (firstCard.dataset.card === secondCard.dataset.card ){
        highlightMatches(firstCard);
        highlightMatches(secondCard);
        disablecards();
        return;
    }
    unflipCards();
}

export function highlightMatches(card){
    highlightsCards += 1;
    card.classList.add('card--highlight');
    checkVictory(highlightsCards);
}

export function resetHighligths(){
    highlightsCards = 0;
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






