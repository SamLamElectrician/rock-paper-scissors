const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScoreSpan = document.querySelector("[data-computer-score]")
const yourScoreSpan = document.querySelector("[data-your-score]")
const endDesc = document.querySelector("endDesc")
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


selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection){
  const computerSelection = randomSelection()
  const yourWinner = IsWinner(selection, computerSelection)
  const computerWinner = IsWinner(computerSelection, selection)
  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
  if (computerScoreSpan === 5 | yourScoreSpan === 5) {
    declareWinner();
  }
}

function incrementScore(scoreSpan){
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function declareWinner(){
  endDesc = 'you have won'
}

function IsWinner(selection, opponentSelection){
  return selection.beats === opponentSelection.name
}

function randomSelection(){
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}



    