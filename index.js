// Code your solutions in this file
function printBadges(arr) {
    let employees = 0;
    
    while (employees < arr.length) {
    console.log(`Welcome ${arr[employees]}! You are employee #${++employees}.`)
    }
    return arr
}



function tailsNeverFails() {
    let tails = 0;
    while (Math.random() >= 0.5) {
        tails++ };

    return (`You got ${tails} tails in a row!`);
}