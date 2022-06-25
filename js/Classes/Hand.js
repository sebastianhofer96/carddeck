/**
 * A hand holds a maximum amount of cards which have been drawn from a deck.
 * Cards can be added and removed from the hand.
 */
export default class Hand {
    #maxLength;
    #cards;
    #idCounter;

    constructor(maxLength) {
        this.#maxLength = maxLength;
        this.#cards = {};
        this.#idCounter = 1;
    }

    /**
     * Add a card to the hand.
     * @param {Card} card The card to be added to the hand.
     * @returns An identifier of the card if the hand is not full. Otherwise, null.
     */
    addCard(card) {
        if (this.isFull()) {
            console.log("Hand.addCard(card): hand is already full");
            return null;
        }

        let cardId = this.#idCounter++;
        this.#cards[cardId] = card;
        return cardId;
    }

    /**
     * Gets the card for the given identifier from the hand.
     * @param {Number} cardId The identifier of the card.
     * @returns The according card if the identifier exists. Otherwise, null.
     */
    getCard(cardId) {
        if (this.#cards[cardId] === undefined) {
            console.log(`Hand.getCard(${cardId}): cardId does not exist`);
            return null;
        }

        return this.#cards[cardId];
    }

    /**
     * Removes the card for the given identifier from the hand.
     * @param {Number} cardId The identifier of the card.
     */
    removeCard(cardId) {
        // check if the requested card exists
        if (this.#cards[cardId] === undefined) {
            console.log(`Hand.removeCard(${cardId}): cardId does not exist`);
            return;
        }

        delete this.#cards[cardId];
    }

    /**
     * Checks whether the hand has the maximum number of cards.
     * @returns Whether the hand is full.
     */
    isFull() {
        return this.length == this.#maxLength;
    }

    /**
     * The number of cards in the hand.
     */
    get length() {
        return Object.keys(this.#cards).length;
    }
}