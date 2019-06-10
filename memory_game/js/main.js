var cards = ["queen", "queen", "king", "king"];

//empty array will hold cards in play
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} 
		else {
			console.log("Sorry, try again.");
	}};
};

//function to store steps
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
	checkForMatch();
	};

flipCard(0);
flipCard(2);
