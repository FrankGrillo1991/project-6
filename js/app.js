const phrases = ['Fantasia', 'Home Alone', 'The Shining', 'Amadeus', 'Immortal Beloved']

const startButton = document.querySelector('.btn__reset');

const qwerty = document.getElementById('qwerty');

const phrase = document.getElementById('phrase');

const overlay = document.getElementById("overlay")

let missed = 0;

let letters = document.querySelectorAll("li");

let show = document.querySelectorAll("li");

let hearts = document.querySelectorAll("img");
console.log(hearts);

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
    const characters = document.querySelectorAll(".letter");
    let match = null;
    for (let i = 0; i < characters.length; i++) {
        if (button.textContent === characters[i].textContent) {
         match = characters[i].textContent;
        characters[i].classList.add("show")
        console.log(characters[i].textContent)
    } 
}
        return match;
}

const checkWin = () => {
    if (letters === show) {
        
    }

}

startButton.addEventListener('click', () => {
     overlay.style.visibility = "hidden"; 
})

let letterFound;

qwerty.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.classList.add("chosen")
        letterFound = checkLetter(event.target);
    }
    console.log(letterFound);
    if (letterFound === null) {
        hearts[missed].src = "../images/lostHeart.png";
        missed++;
    }
        
})

