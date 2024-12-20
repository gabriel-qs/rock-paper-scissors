//Arquivo JS do jogo da velha

//1. Declarar os scores
var humanScore = 0;
var computerScore = 0;

//2. Sortear a escolha do computador
let computerChoice = getComputerChoice();
//console.log(`Escolha do computador: ${computerChoice}`);

//3. Pegar a escolha do usuário
let humanChoice = getHumanChoice();

//5. Mostrar quem venceu a rodada
let showResult = function(result, hum, comp){
	switch (result){
		case 1:
			console.log( `Voce venceu! ${hum} vence ${comp}`);
		break;
		case 2:
			console.log( `Voce perdeu! ${comp} vence ${hum}`);
		break;
		case 3:
			console.log( `Empate!`);
		break;
	}
};

//4. Jogar rodada
playRound(humanChoice, computerChoice, showResult);

function getComputerChoice() {
	let drawNumber = Math.floor(Math.random() * (4 - 1) + 1); //Gera um num aleatorio entre 1 a 3
	
	if(drawNumber === 1) {
		return "pedra";
	} 
	else if(drawNumber === 2) {
		return "papel";
	} 
	else {
		return "tesoura";
	}
	
} 

function getHumanChoice(){
	let choice = prompt("Digite a sua escolha - pedra, papel ou tesoura: ");
	return choice.toLowerCase();
}

function playRound(human, computer, show){
	if (human === "papel" && computer === "pedra"){
		show(1, human, computer);
	} else if (human === "tesoura" && computer === "papel") {
	  	show(1, human, computer); 
	} else if (human === "pedra" && computer === "tesoura"){
		show(1, human, computer);	   
	} else if (human === computer){
		show(3, human, computer);
	} else {
		show(2, human, computer);
	}
}