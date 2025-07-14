let userScore = 0;
let computerScore = 0;
let draws = 0;

const choices = ['stone', 'paper', 'scissor'];
const choiceEmojis = {
  stone: '🪨 Stone',
  paper: '📄 Paper',
  scissor: '✂️ Scissor'
};

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const userChoiceEl = document.getElementById('user-choice');
  const computerChoiceEl = document.getElementById('computer-choice');
  const outcomeEl = document.getElementById('outcome');

  // Display choices
  userChoiceEl.innerText = `You chose: ${choiceEmojis[userChoice]}`;
  computerChoiceEl.innerText = `Computer chose: ${choiceEmojis[computerChoice]}`;

  // Determine result
  if (userChoice === computerChoice) {
    draws++;
    outcomeEl.innerText = "It's a Draw!";
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissor') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    userScore++;
    outcomeEl.innerText = "You Win!";
  } else {
    computerScore++;
    outcomeEl.innerText = "Computer Wins!";
  }

  // Update scores
  document.getElementById('user-score').innerText = userScore;
  document.getElementById('computer-score').innerText = computerScore;
  document.getElementById('draws').innerText = draws;

  // Animate choice and result text
  [userChoiceEl, computerChoiceEl, outcomeEl].forEach(el => {
    el.classList.remove('choice-text');  // reset animation
    void el.offsetWidth;                 // trigger reflow
    el.classList.add('choice-text');     // re-apply animation
  });
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  draws = 0;

  // Reset UI
  document.getElementById('user-score').innerText = 0;
  document.getElementById('computer-score').innerText = 0;
  document.getElementById('draws').innerText = 0;
  document.getElementById('user-choice').innerText = "";
  document.getElementById('computer-choice').innerText = "";
  document.getElementById('outcome').innerText = "";
}
