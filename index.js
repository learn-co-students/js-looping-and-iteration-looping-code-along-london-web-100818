// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  };
  return array;
};

function coinToss() {
  return Math.random();
};

function tailsNeverFails() {
  i = 0;
  while (coinToss() >= 0.5) {
    i++;
  };
  return `You got ${i} tails in a row!`
};