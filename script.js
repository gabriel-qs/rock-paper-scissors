//Arquivo JS do jogo da velha
var humanScore = 0;
var computerScore = 0;

let computerChoice = getComputerChoice();
console.log(computerChoice);

function getComputerChoice() {
	let drawNumber = Math.floor(Math.random() * (4 - 1) + 1); //Gera um num aleatorio entre 1 a 3
	
	if(drawNumber === 1) {
		return "rock";
	} 
	else if(drawNumber === 2) {
		return "paper";
	} 
	else {
		return "scissors";
	}
	
} 