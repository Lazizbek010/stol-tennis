// selectors
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let select = document.querySelector('.select')
let player1Btn = document.querySelector('.player1-btn')
let player2Btn = document.querySelector('.player2-btn')
let reset = document.querySelector('.reset')

let score1 =0
let score2 =0
let level = select.value
let gameOver = true
// events
player1Btn.addEventListener('click', ()=>{
    if(gameOver){
        score1++
        if(score1 == level){
            gameOver = false
            player1.style.color = 'green'
            player2.style.color = 'red'
        }
        player1.textContent = score1
    }
})

player2Btn.addEventListener('click', ()=>{
    if(gameOver){
        score2++
        if(score2 == level){
            gameOver = false
            player2.style.color = 'green'
            player1.style.color = 'red'
        }
        player2.textContent = score2
    }
})

select.addEventListener('change', ()=>{
    level = select.value
    refreshGame()
})

reset.addEventListener('click', ()=>{
    refreshGame()
})

function refreshGame(){
    score1 =0
    score2 =0
    level = select.value
    gameOver = true
    player1.style.color = 'black'
    player2.style.color = 'black'
    player1.textContent = 0
    player2.textContent = 0
}