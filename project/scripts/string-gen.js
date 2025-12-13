const GEN_BUTTON = document.querySelector('#generate');
const INPUT = document.querySelector('#len_in');
const OUTPUT = document.querySelector('#scroll');
const COPY = document.querySelector('#copy');
let validWords = [];

GEN_BUTTON.addEventListener('click', () => {
    let num = parseInt(INPUT.value);
    if (num <= 20000 && num > 0)
        generateWords(num);
    else
        OUTPUT.textContent = 'Please choose a value <= 20000 and > 0'
});

function generateWords(length) {
    let words = [];
    for (let i = 0; i < length; i++)
        words.push(getRandomWord());
    displayWords(words);
}

function getRandomWord() {
    let num = genNumber();
    return validWords[num];

    function genNumber() {
        let num = Math.random();
        let rand = Math.floor(num * (validWords.length - 1 + 1)) - 1;
        return rand;
    }
}

async function getWords() {
    console.log("fetching")
    const raw_words = await fetch(
        "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt"
    );
    const raw_words_body = await raw_words.text();
    return raw_words_body.split("\n");
}

function displayWords(words) {
    OUTPUT.innerHTML = '';
    let elems = [];
    for (let word of words) {
        let w = document.createElement('a');
        w.textContent = `${word} `;
        elems.push(w);
    }
    for (let element of elems) {
        OUTPUT.appendChild(element);
    }
}

COPY.addEventListener('click', () => {
    let txt = OUTPUT.textContent;
    if (txt !== "Output...") {
        navigator.clipboard.writeText(txt);
        alert('Copied to clipboard');
    } else {
        alert('Please supply a Length')
    }
})

async function main() {
    validWords = await getWords();
}

main();
