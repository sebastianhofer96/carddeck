/**
 * A pile is a batch of cards that have been played from the hand.
 * To put a card, either type or value must match.
 */
 export default class Pile {
    #topCard;

    constructor() {
        this.#topCard = null;
    }

    /**
     * Put a card on the pile. The type or value must match.
     * @param {Card} card The card to put on the pile.
     * @returns Whether it was successful.
     */
    putCard(card) {
        // check if there is already a card on the pile
        if (this.#topCard !== null) {
            if (this.#topCard.type != card.type && this.#topCard.value != card.value) {
                console.log("Pile.putCard(card): Card cannot be put on pile, either type or value does not match");
                return false;
            }
        }

        this.#topCard = card;
        return true;
    }
}