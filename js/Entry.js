import App from './App.js';
import Deck from './Classes/Deck.js';
import Hand from './Classes/Hand.js';
import Pile from './Classes/Pile.js';

/**
 * Functions
 */

App.initialize = function() {
    App.deck = new Deck(App.DECK_SIZE);
    App.hand = new Hand(App.HAND_SIZE);
    App.pile = new Pile();

    App.updateCardCount();
    App.deck.print();
};

App.addCardToHand = function(card) {
    let cardId = App.hand.addCard(card);

    // append div for card to hand with click event handler
    $(`<div class="card card-${card.type}-${card.value}"></div>`).appendTo("#hand").click(function() {
        let card = App.hand.getCard(cardId);
        let wasCardPlayed = card.playCard();

        if (wasCardPlayed) {
            // remove card from hand and put it on the pile
            App.hand.removeCard(cardId);
            $(this).remove();
            $("#pile").removeClass();
            $("#pile").addClass(`card card-${card.type}-${card.value}`);
            App.updateCardCount();
        }
        else {
            alert("Card cannot be played, type or value must match with card on pile.");
        }
    });
};

App.updateCardCount = function() {
    // update the card count for deck and hand
    $("#cardsInDeck").text(App.deck.length);
    $("#cardsInHand").text(`${App.hand.length} / ${App.HAND_SIZE}`);
};

/**
 * Events
 */

$("#deck").click(function() {
    if (App.hand.isFull()) {
        alert("Hand is full, cannot draw any more cards.");
        return;
    }
    
    // draw a card from the deck
    let card = App.deck.drawCard();

    if (card == null) {
        alert("Deck is empty, cannot draw any more cards.");
        return;
    }

    // check if the last card was drawn from deck
    if (App.deck.length == 0) {
        $("#deck").removeClass("card card-hidden");
    }

    // add drawn card to hand
    App.addCardToHand(card);
    App.updateCardCount();
});

$("#btn-shuffle").click(function() {
    let wasDeckShuffled = App.deck.shuffle();

    if (wasDeckShuffled) {
        App.deck.print();
        alert("The deck was shuffled.");
    }
    else {
        alert("The deck contains too few cards to be shuffled.");
    }
});

$("#btn-reset").click(function() {
    App.initialize();
    $("#hand").empty();
    $("#deck").addClass("card card-hidden");
    $("#pile").removeClass();
});

/**
 * App
 */

App.initialize();