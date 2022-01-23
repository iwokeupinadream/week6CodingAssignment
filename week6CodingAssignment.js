class Card {
    constructor(value, suit) {
        this.value = value
        this.suit = suit
    //assigns a string to the value of nameOfCard based on the value of the card    
        if(value > 12) {
            this.nameOfCard = "The King of " + suit
        } else if( value > 11) {
            this.nameOfCard = "The Queen of " + suit
        } else if(value > 10){
            this.nameOfCard = "The Jack of " + suit
        } else
        this.nameOfCard = "The " + value + " of " + suit
    }
}

class Deck {
    constructor(cardArray) {
        this.cardArray = cardArray
    }
    //creates 13 of each value and suit and adds them to an array called "array of cards"
    generateNewDeck() {

        let arrayOfCards = []

        for(let i = 0; i < 13; i++) {
            arrayOfCards.push(new Card(i + 1, 'Hearts')) 
        }
        for(let i = 0; i < 13; i++) {
            arrayOfCards.push(new Card(i + 1, 'Diamonds'))
        }
        for(let i = 0; i < 13; i++) {
            arrayOfCards.push(new Card(i + 1, 'Clubs'))
        }
        for(let i = 0; i < 13; i++) {
            arrayOfCards.push(new Card(i + 1, 'Spades'))
        }

        return new Deck(arrayOfCards)
}
    //shuffles deck randomly using a loop i studied online
    static shuffleDeck(deck) {
        let currentIndex = deck.length, randomIndex;
      //loop that loops while there are still cards to shuffle
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * 
            currentIndex);
            currentIndex--;
      //swaping of cards
          [deck[currentIndex], deck[randomIndex]] = 
          [deck[randomIndex], deck[currentIndex]];
        }
      
        return deck;
      }
}

class Player {
    constructor(playerScore, playerID,) {
        this.playerScore = playerScore
        this.playerID = playerID
        this.playerHand = []
    }

    generatePlayer(score, playerID,) {
        return new Player(score, playerID)
        }
}

class Game {
    constructor() {
        
    }
        
    start() {

        alert('Welcome to WAR!')

        alert('Press the okay button to generate and shuffle a new deck')

        let gameDeck = new Deck().generateNewDeck()
            console.log(gameDeck)

        let shuffledDeck = Deck.shuffleDeck(gameDeck.cardArray)
            console.log(shuffledDeck)

        alert('Deck Generated and Shuffling Completed!\n' +
        'Press okay to generate 2 players\n' +
        'and to divide the shuffled deck between them')


        let player1 = new Player().generatePlayer(0, 1)
        let player2 = new Player().generatePlayer(0, 2)

        console.log(player1, player2)

        console.log('dividing cards')
        let playerCards = this.divideCards(shuffledDeck)
            console.log(playerCards)
        console.log('dealing cards')
        player1.playerHand.push(playerCards[0])
        player2.playerHand.push(playerCards[1])
            console.log(player1.playerHand)
            console.log(player2.playerHand)

        alert('Players generated and cards distrubted to players')
        

        //loops through until player 1 is out of cards
        //each loop acts as a round
        //whichever player has a higher value card gets 1 point added to their playerScore property
        //no point is added if each player draws cards of equal value
        for(let i = 0; i < player1.playerHand[0].length; i++) {

            alert('Ready, Set, Draw!')

            if(player1.playerHand[0][i].value != player2.playerHand[0][i].value) {
                if(player1.playerHand[0][i].value > player2.playerHand[0][i].value){
                    player1.playerScore += 1
                    alert('player 1 draws ' + player1.playerHand[0][i].nameOfCard + 
                    '\nwhile player 2 drew ' + player2.playerHand[0][i].nameOfCard + '\n\nPlayer 1 wins the round!\n\nPlayer 1 total score: ' +
                    player1.playerScore)
                } else if(player1.playerHand[0][i].value < player2.playerHand[0][i].value) {
                    player2.playerScore += 1
                    alert('player 2 draws ' + player2.playerHand[0][i].nameOfCard + 
                    '\nwhile player 1 drew ' + player1.playerHand[0][i].nameOfCard + '\n\nPlayer 2 wins the round!\n\nPlayer 2 total score: ' +
                    player2.playerScore)
                }
            } else if(player1.playerHand[0][i].value === player2.playerHand[0][i].value) {
                alert('Both players drew ' + player1.playerHand[0][i].nameOfCard + '\n\nNo points awarded')
            } console.log(i)
        }

        console.log(player1.playerScore)
        console.log(player2.playerScore)

        //loop to decide who won the game
        if(player1.playerScore != player2.playerScore) {
            if(player1.playerScore > player2.playerScore) {
                alert('Player 1 wins with a score of ' + player1.playerScore + '\nPlayer 2 score: ' +
                player2.playerScore)
                console.log('player 1 wins')
            } else if(player1.playerScore < player2.playerScore) {
                alert('Player 2 wins with a score of ' + player2.playerScore + '\nPlayer 1 score: ' +
                player1.playerScore)
                console.log('player 2 wins')
            }
        } else if (player1.playerScore === player2.playerScore) {
            console.log('Draw! Both players share the same overall score')
        }
        
    }

    //even cards go to player 1
    //odd cards go to player 2
    //returns an array with 2 arrays of cards
    divideCards(shuffledDeck) {
        
        let player1Hand = []
        let player2Hand = []


        for(let i = 0; i < shuffledDeck.length; i++) {
            if(i % 2 === 0) {    
            player1Hand.push(shuffledDeck[i])
            }
            else if(i % 2 === 1) {
                player2Hand.push(shuffledDeck[i])
            }
        }
            console.log(player1Hand)
            console.log(player2Hand)
            return([player1Hand, player2Hand])
    }
   
}

let game = new Game()
game.start()