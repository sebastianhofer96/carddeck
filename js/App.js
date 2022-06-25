let App = {
    DECK_SIZE: 21,
    HAND_SIZE: 7,
    CARD_TYPES: ['Red', 'Blue', 'Green', 'Yellow'],
    CARD_VALUES: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
};

Object.freeze(App.CARD_TYPES);
Object.freeze(App.CARD_VALUES);

export default App;