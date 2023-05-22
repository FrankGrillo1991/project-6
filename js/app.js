const phrases = ['Fantasia', 'Home Alone', 'The Shining', 'Amadeus', 'Immortal Beloved']

const qwerty = document.getElementById('qwerty');

const phrase = document.getElementById('phrase');

let missed = 0;

const getRandomPhraseAsArray = arr => {
    const random = Math.floor( Math.random() * 6 );
    const phrase = arr[random];
    const wordArray = phrase.split('');
    return wordArray.length;
}

console.log(getRandomPhraseAsArray(phrases))

getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = arr => {

}

const checkLetter = button => {

}

const checkWin = () => {

}

startButton.addEventListener('click', () => {
    
});


qwerty.addEventListener('click', e => {

})