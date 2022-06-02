import { createLevelEasy } from './level-easy.js';
import { createLevelNormal } from './level-normal.js';
import { createLevelHard } from './level-hard.js';
import { removeBoard } from './remove-level.js'
import { resetHighligths } from './game.js';

const victoryModal = document.querySelector('[data-modal="victory"]');
const boardWrapper = document.querySelector('[data-wrapper]');
let cardsInGame = 16;

export function setNumberOfCards(level){

    if(level === 'easy'){
        return cardsInGame = 12;
    }
    if(level === 'normal'){
        return cardsInGame = 16;
    }
    if (level === 'hard'){
        return cardsInGame = 20;
    }
}

export function selectLevel(level){
    let levelBoard;
    if(level === 'easy'){
        levelBoard = createLevelEasy();
    }
    
    if(level === 'normal'){
        levelBoard = createLevelNormal();
    }
    
    if(level === 'hard'){
        levelBoard = createLevelHard();
    }
    
    shuffleCards(levelBoard);
    setNumberOfCards(level);
    removeBoard(level);
    resetHighligths();    
}

export function shuffleCards(levelBoard){
    const cards = levelBoard.querySelectorAll('[data-card]')
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 20)
        card.style.order = randomPosition;
    })
}

export function checkVictory(highlightsCards){

    if (highlightsCards === cardsInGame){
        showVictory();
    }
}

function showVictory(){
    victoryModal.classList.remove('hide');
    boardWrapper.classList.add('blur');
}