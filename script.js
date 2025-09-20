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

// Practice
/* let person = {
    name : "John",
    age : 21,
    country : "United States"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logData()

let age = 67

if (age < 6){
    console.log('\nFree');
} else if ( age < 18 ) {
    console.log('\nchild discount');
} else if ( age < 27 ) {
    console.log('\nstudent discount');
} else if ( age < 67 ) {
    console.log('\nfull price');
} else {
    console.log('\nsenior citizen discout');
}

let largeCountries = ["United States", "Canada", "India", "China", "Ecuador"]

console.log('\nThe five largest countries in the world');
for (let i = 0; i < largeCountries.length; i++) {
    console.log('- ' + largeCountries[i])
}

let largeCountries1 = ["Tuvalu", "Canada", "India", "China", "Monaco"]
largeCountries1.pop()
largeCountries1.shift()
largeCountries1.unshift("United States")
largeCountries1.push("Ecuador")
console.log('\nThe five largest countries in the world');
for (let i = 0; i < largeCountries1.length; i++) {
    console.log('- ' + largeCountries1[i])
}

let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log('\n Spooky');
}

let hands = ["Rock", "Paper", "Scissors"]

function getHand(){
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex]
}
console.log("\n" + getHand());
*/
