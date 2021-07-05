let score = document.getElementById('counter').innerHTML
score = parseInt(score, 10)

function increase() {
    score++
    document.getElementById('counter').innerHTML = score
}

function decrease() {
    score--
    document.getElementById('counter').innerHTML = score
}

function reset() {
    score == 0 ? window.alert('The counter was already reseted.') :
        score = 0
    document.getElementById('counter').innerHTML = score
}