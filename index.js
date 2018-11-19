// Code your solutions in this file
function printBadges(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
    }
    return arr
}

function random() {
    return Math.random()
}

function tailsNeverFails() {
    i = 0
    while (random() >= 0.5) {
        i++
    }
    return `You got ${i} tails in a row!`
}
