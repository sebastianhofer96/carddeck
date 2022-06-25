import App from '../App.js';
import Card from "./Card.js";
import { getRandomInteger, shuffleArray } from "../Helper.js";

/**
 * A deck with a given length that randomly selects cards to be initialized with.
 * The cards in the deck can be shuffled, cards can be drawn and the cards can be printed. 
 */
export default class Deck {
    #cards;

    constructor(length) {
        this.#createCards(length);        
    }

    /**
     * Populates the deck with the given number of random cards. 
     * @param {Number} length The number of cards to create.
     */
    #createCards(length) {
        this.#cards = [];

        let typeCount = Object.keys(App.CARD_TYPES).length;
        let valueCount = Object.keys(App.CARD_VALUES).length;

        // randomly select cards from the available types/values to initialize the deck with
        for (let i = 0; i < length; i++) {
            let randomType = getRandomInteger(0, typeCount);
            let randomValue = getRandomInteger(0, valueCount);

            this.#cards[i] = new Card(App.CARD_TYPES[randomType], App.CARD_VALUES[randomValue]);
        }
    }

    /**
     * Shuffle the deck. Needs to contain at least 2 cards.
     * @returns Whether it was successful.
     */
    shuffle() {
        if (this.#cards.length <= 1) {
            console.log("Deck.shuffle(): deck needs to contain at least 2 cards");
            return false;
        }

        shuffleArray(this.#cards);
        return true;
    }

    /**
     * Draw the next card from the deck.
     * @returns A card if the deck is not empty. Otherwise, null.
     */
    drawCard() {
        if (this.#cards.length == 0) {
            console.log("Deck.drawCard(): deck is empty");
            return null;
        }

        return this.#cards.pop();
    }

    /**
     * Prints all the cards in the deck line by line with their index in the deck, type and value.
     */
    print() {
        for (let i = 0; i < this.#cards.length; i++) {
            let currentCard = this.#cards[i];
            console.log(`${i}: ${currentCard.type}, ${currentCard.value}`);
        }
        console.log();
    }

    /**
     * The number of cards in the deck.
     */
    get length() {
        return this.#cards.length;
    }
}