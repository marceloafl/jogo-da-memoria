import { flipcard } from "./js/game.js";
import { selectLevel } from "./js/level-selector.js";

const cards = document.querySelectorAll('[data-card]');
const boardWrapper = document.querySelector('[data-wrapper]');
const victoryModal = document.querySelector('[data-modal="victory"]');
const board = document.querySelector('[data-wrapper]');
const victoryModalCloseBtn = document.querySelector('[data-victory="close"]');
const levelSelector = document.querySelector('[data-select="level"]');
let level = 'normal';

window.addEventListener('load', function(){
    selectLevel('normal');
})

levelSelector.addEventListener('change', function(){
    level = levelSelector.value;
    selectLevel(level);
});

boardWrapper.addEventListener('click', function(event){
    const target = event.target;

    if (target.dataset.card === 'front' || target.dataset.card === 'back'){
        const card = target.parentNode;
        flipcard(card);
    }
})

victoryModalCloseBtn.addEventListener('click', function(){
    victoryModal.classList.add('hide');
    board.classList.remove('blur');
    document.location.reload();
})



