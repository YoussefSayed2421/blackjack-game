let player = {
  name: "Player",
  chips: 200,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = ` ${player.name}: $${player.chips} `;
let cards = [];
let cardsEl = document.getElementById("cards-el");
let sum = 0;
let sumEl = document.getElementById("sum-el");
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
  playerEl.textContent = ` ${player.name}: $${player.chips} `;
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    playerEl.textContent = ` ${player.name}: $1000 `;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    playerEl.textContent = ` ${player.name}: $0 `;
  }
  cardsEl.textContent = ` Cards: `;
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]} `;
  }
  sumEl.textContent = ` Sum: ${sum} `;
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}
