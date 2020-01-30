console.log(cards);



// Deal three cards from the deck to each player
// Choose a Card
// Computer randomly chooses a card
// Decide winner

class Game {
  constructor(player, rival){
    this.player      = player;
    this.rival       = rival;
    this.playerCards = [];
    this.rivalCards  = [];
    this.deck        = cards;
    this.played      = [];
    this.points      = {player: 0, rival: 0};
    this.round       = 0;
    this.deal();
  }

  deal = () => {

    if(this.deck.length < 6){
      this.endGame();
      return;
    }

    for (let i = 1; i < 7; i++){
      let index = Math.floor(Math.random() * this.deck.length);
      if (i % 2 !== 0){
      this.playerCards.unshift(this.deck[index]);
      console.log(`${this.player} drew a ${this.deck[index].name}!`);
      this.deck.splice(index, 1);
      } else {
        this.rivalCards.unshift(this.deck[index]);
        console.log(`${this.rival} drew a ${this.deck[index].name}!`);
        this.deck.splice(index, 1);
      }
    }

    this.turn(1);
  }

  endGame = () => {
    console.log("Not Enough Pokemon!!!");
    if (this.points.player > this.points.rival){
      console.log(this.player + " Wins!!!");
    } else if (this.points.player < this.points.rival){
      console.log(this.rival + " Wins!!!");
    } else {
      console.log("It's A Draw!!");
    }
  }


  turn = (which) => {
    if (which === 1){
      console.log("It is " + this.player +"'s turn!");
      let cards = this.playerCards;
      let choice = prompt(`Pick a card: \n ${this.playerCards[0].name} \n ${this.playerCards[1].name} \n ${this.playerCards[2].name}`);
      console.log(choice + ", I choose you!");
    } else {

    }
  }


}
