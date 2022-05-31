const cards = document.querySelectorAll('[data-card]');

function flipcard(){
    this.classList.add('flip')
}

cards.forEach(function(card){
    card.addEventListener('click', flipcard)
})