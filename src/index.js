const characterAPI = 'http://localhost:3000/characters';
const characterBar = el('character-bar');
const detailedInfo = el('detailed-info');
const namePar = el('name');
const image = el('image');
const voteCount = el('vote-count');
const voteForm = el('votes-form');

let currentCharacter;

voteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentCharacter.votes += parseInt(e.target.votes.value);
    showInfo(currentCharacter);
    e.target.reset();
});

fetch(characterAPI)
  .then((res) => res.json())
  .then(renderCharacters);

function renderCharacters(characters) {
    characters.forEach(renderCharacter)
};

function renderCharacter(character) {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character.name;
    characterBar.append(characterSpan);


    characterSpan.addEventListener('click',  () => {
        currentCharacter = character;
        showInfo(character);
    });
};

function showInfo(character) {
    namePar.innerText = character.name;
    image.src = character.image
    voteCount.innerText = character.votes;
}

function el(id) {
    return document.getElementById(id);
};