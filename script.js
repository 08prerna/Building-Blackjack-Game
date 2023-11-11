let firstcard=10
let secondcard=4
let sum=firstcard+secondcard
let hasBlackjack=false
let islive=true
let message=""
let mssger= document.getElementById("mess-error")

function srtGame() {
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="You've got Blackjack!"
        hasBlackjack=true
    }
    else{
        message="You're out of the game!"
        islive=false
    }

    mssger.textContent=message
}
