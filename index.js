let player = {
    name: 'Per',
    chips: 200
}
let cardArray = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playersEl = document.getElementById("player-el")
playersEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10){
        return 10
    }
    return randomNumber
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    isAlive = true
    cardArray = [firstCard, secondCard]

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cardArray.length; i++) {
        cardsEl.textContent += cardArray[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cardArray.push(card)
        renderGame()
    }
}