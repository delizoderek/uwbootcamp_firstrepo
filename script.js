var player = {
    wins: 0,
    ties: 0,
    losses: 0,
};
      
let choices = ['R', 'P', 'S'];

setStats();
function startGame(){
    let contPlaying = true;
    
    while(contPlaying){
        let playerChoice = prompt('Choose R,P, or S');
        if(playerChoice !== null){
            playerChoice = playerChoice.toUpperCase();
        } else {
            playerChoice = 'null';
        }

        if(choices.includes(playerChoice)){
            //play game
            //Get computer choice
            let randInt = Math.floor(Math.random() * choices.length);
            let npcChoice = choices[randInt];
            alert(`The computer chooses ${npcChoice}`);
            //Determine a winner
            let resultState = checkWinState(playerChoice,npcChoice);
            //update player object and print results
            if(resultState == 1){
                player.wins++;
                alert('You win!');
            } else if (resultState == 0){
                player.ties++;
                alert("It's a tie");
            } else {
                player.losses++;
                alert("The computer wins!");
            }
            
            setStats();
            contPlaying = confirm(`${displayStats()}\n\nWould you like to play again?`);
        } else {
            contPlaying = confirm('Please enter a valid choice (R, P, or S) \n would you like to try again?');
        }
    }
}

function setStats(){
    document.getElementById("wins").innerHTML = `Wins: ${player.wins}`;
    document.getElementById("ties").innerHTML = `Ties: ${player.ties}`;
    document.getElementById("losses").innerHTML = `Losses: ${player.losses}`;
}

// checkWinState will return -1 for loss, 0 for tie,and 1 for a win
function checkWinState(pChoice, compChoice){
    if(pChoice === compChoice){
        return 0;
    } else if(  pChoice === 'R' && compChoice == 'S' ||
    pChoice === 'S' && compChoice == 'P'  || 
    pChoice === 'P' && compChoice == 'R' ){
        return 1;
    } else {
        return -1;
    }
}

function displayStats(){
    return  `Player Stats \n` +
            `Wins: ${player.wins}\n`+
            `Ties: ${player.ties}\n` +
            `Losses: ${player.losses}`;
}

function testWinState(){
    console.log("<---- Win Conditions ---->");
    console.log(checkWinState('R','S') == 1);
    console.log(checkWinState('S','P') == 1);
    console.log(checkWinState('P','R') == 1);
    
    console.log("<---- Lose Conditions ---->");
    console.log(checkWinState('S','R') == -1);
    console.log(checkWinState('P','S') == -1);
    console.log(checkWinState('R','P') == -1);

    console.log("<---- Tie Conditions ---->");
    console.log(checkWinState('R','R') == 0);
    console.log(checkWinState('S','S') == 0);
    console.log(checkWinState('P','P') == 0);
}