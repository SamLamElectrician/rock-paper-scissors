const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScoreSpan = document.querySelector("[data-computer-score]")
const yourScoreSpan = document.querySelector("[data-your-score]")
const endDesc = document.querySelector("#endDesc")
const returnMainBtn = document.querySelector("#retryBtn");
const container = document.querySelector("#results-container");

const SELECTIONS = [
  {
    name: 'rock',
    beats: 'scissors'
  },
  {
    name: 'paper',
    beats: 'rock'
  },
  {
    name: 'scissors',
    beats: 'paper'
  }
]
const sentence = {
  1: "A great start to battle",
  2: "Another day to live",
  3: "Halfway to Victory",
  4: "The battle is nearing",
  5: "You have won to fight another day"
}

const lossSentence = {
  1: "You have lost the first round, try again.",
  2: "Alas, Another blow to the clavary",
  3: "One step closer to your demise",
  4: "Death is awaiting",
  5:"gg no re noob"
}

var tie = [
  "An equal battle of might",
  "Another day with no winners",
  "No one is victorious ",
  "A close match with no winners"
]


selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection);
    console.log(computerScoreSpan.innerHTML)
  });
});

function makeSelection(selection){
  const computerSelection = randomSelection()
  const yourWinner = IsWinner(selection, computerSelection)
  const computerWinner = IsWinner(computerSelection, selection)
  if (selection === computerSelection){
    tieSentence()
  }
  if (yourWinner) {
    incrementScore(yourScoreSpan)
    winnerSentence();
  }
  if (computerWinner) {
    incrementScore(computerScoreSpan)
    loserSentence();
  }
};

function incrementScore(scoreSpan){
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function tieSentence(){
  let tiephrase = tie[(Math.floor(Math.random()* tie.length))]
  endDesc.innerHTML = tiephrase
}

function winnerSentence(){
  endDesc.innerHTML = sentence[parseInt(yourScoreSpan.innerHTML)]
}

function loserSentence(){
  endDesc.innerHTML = lossSentence[parseInt(computerScoreSpan.innerHTML)]
}



function IsWinner(selection, opponentSelection){
  return selection.beats === opponentSelection.name
}

function randomSelection(){
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
};

