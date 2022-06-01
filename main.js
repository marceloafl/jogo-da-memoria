const cards = document.querySelectorAll('[data-card]');
let isThereAFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;

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
        disablecards();
        return;
    }
    unflipCards();
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

(function shuffleCards(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 20)
        card.style.order = randomPosition;
        console.log(randomPosition)
    })
})()

cards.forEach(function(card){
    card.addEventListener('click', flipcard);
})