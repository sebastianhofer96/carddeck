import App from '../App.js';

/**
 * A card with a type and a value that can be played.
 */
export default class Card {
    #type;
    #value;

    constructor(type, value) {
        this.#type = type;
        this.#value = value;
    }

    /**
     * Play the card by putting it on the pile.
     * @returns Whether it was successful.
     */
    playCard() {
        // print message as effect of the card
        console.log(`Playing card with type ${this.#type} and value ${this.#value}`);
        
        return App.pile.putCard(this);
    }

    /**
     * The type of the card.
     */
    get type() {
        return this.#type;
    }

    /**
     * The value of the card.
     */
    get value() {
        return this.#value;
    }
}