const phrases = ['Fantasia', 'Home Alone', 'The Shining', 'Amadeus', 'Immortal Beloved']

const startButton = document.querySelector('.btn__reset');

const qwerty = document.getElementById('qwerty');

const phrase = document.getElementById('phrase');

const overlay = document.getElementById("overlay")

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
    const characters = document.getElementsByTagName("letter");
    let match = null;
    for (let i = 0; i < characters.length; i++) {
        if (button.textContent === characters[i].textContent) {
        characters[i].classList.add("show")
        let match = characters;
        console.log(characters[i].textContent)
    } else {
        return null;
    }




}

const checkWin = () => {

}

startButton.addEventListener('click', () => {
     overlay.style.visibility = "hidden"; 
})


qwerty.addEventListener('click', e => {
    //Add chosen class to the button that was ScriptProcessorNode
    //Call the checkLetter function and store the results in a variable
    //If the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter

})