let one = document.querySelector('.player-1')
let two = document.querySelector('.player-2')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let select = document.querySelector('.select')
let restart = document.querySelector('.reset')
let a = 0
let b = 0
let gameOver = true
let finish = 3
btn1.addEventListener('click', function player1() {
    if (gameOver) {
        a++
        one.innerHTML = a
        if (a >= finish) {
            gameOver = false
            two.style = `color: red;`
            one.style = `color: green;`
        }
    }
})
btn2.addEventListener('click', function player2() {
    if (gameOver) {
        b++
        two.innerHTML = b
        if (b >= finish) {
            two.style = `color: green;`
            one.style = `color: red;`
            gameOver = false
        }
    }
})
select.addEventListener('change', () => {
    finish = +select.value
    reset()
})
restart.addEventListener('click', reset)
function reset() {
    a = 0
    b = 0
    two.innerHTML = `0`
    one.innerHTML = `0`
    two.style = `color: black;`
    one.style = `color: black;`
    gameOver = true
}