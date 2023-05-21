const phrases = ['Fantasia', 'Home Alone', 'The Shining', 'Amadeus', 'Immortal Beloved']

const qwerty = document.getElementById('qwerty');

const phrase = document.getElementById('phrase');

const missed = 0;

const getRandomPhraseAsArray = arr => {
    const random = Math.floor( Math.random() * 6 );
    const phrase = arr[randomIndex];
    countWords : function {
        const wordArray = phrase.split('');
        return wordArray.length;
    }
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
    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    ul.appendChild(li1);
    ul.appendChild(li2);
}

    function hide(evt) {
        evt.target.style.visibility = "hidden";
    }
});

ul.addEventListener("click", hide, false);

qwerty.addEventListener('click', e => {

})