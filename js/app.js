const phrases = ['Fantasia', 'Home Alone', 'The Shining', 'Amadeus', 'Immortal Beloved']

const qwerty = document.getElementById('qwerty');

const phrase = document.getElementById('phrase');

let missed = 0;

const getRandomPhraseAsArray = arr => {
    const random = Math.floor( Math.random() * 5 );
    const phrase = arr[random];
    const wordArray = phrase.split('');
    return wordArray;
}

console.log(getRandomPhraseAsArray(phrases))

getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
        const character = arr[i];
        const list = document.createElement('li');
        list.textContent = character;
        document.querySelector('#phrase ul').appendChild(list);
        if (character === " " ) {
           list.classList.add("space");
        } else {
            list.classList.add("letter");
        }
        console.log(list);
    }
}

const randomPhrase =
getRandomPhraseAsArray(phrases)
addPhraseToDisplay(randomPhrase)

const checkLetter = button => {
    const checkLetter = document.createElement("li");



}

const checkWin = () => {

}

//startButton.addEventListener('click', () => {
    
;


qwerty.addEventListener('click', e => {

})