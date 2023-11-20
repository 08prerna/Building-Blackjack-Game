let cards=[]
let sum=0
let hasBlackjack = false
let islive = false
let message = ""
let mesgErr = document.getElementById("mess-error")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function srtGame() {
    islive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        islive = false
    }

    mesgErr.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()

}

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number > 10) {
        return 10
    } else if (number === 1) {
        return 11
    } else {
        return number
    }
}