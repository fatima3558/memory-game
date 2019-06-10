var cards = ["queen", "queen", "king", "king"];

//empty array will hold cards in play
var cardsInPlay = [];

//variable to represent first card user flipped
var cardOne = (cards[0]);

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = (cards[1]);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};