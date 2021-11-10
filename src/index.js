// Your code here
// checking if forked correctly

const charAPI = 'http://localhost:3000';

fetch(`${charAPI}/characters`)
.then(res => res.json())
.then(json => {
    json.forEach(renderCharacter)
});

const charContainer = document.getElementById('character-bar');

function renderCharacter(characters) {
    const span = document.createElement('span');

    span.textContent = characters.name;
    charContainer.append(span)
};

const charInfo = renderCharacter;
charInfo.addEventListener('click', displayInfo);

function displayInfo(event) { 
    event.preventDefault();
}
// create a click event listener on character bar
// once clicked, call function that will display characters.id in div#detailed-info

// 1. create variable that holds renderCharacter
// 2. add eventListener to variable
// 3. create function that will GET information from API
// 4. eventListener will call that function with the info