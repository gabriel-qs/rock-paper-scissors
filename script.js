//Arquivo JS do jogo da velha

//Declarar os scores
var humanScore = 0;
var computerScore = 0;

playGame(playRound, getComputerChoice, getHumanChoice, showResult);

//PEGAR A ESCOLHA DO COMPUTADOR e GUARDAR a escolha do computador
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

//PEGAR a escolha do usuario e Guardar a escolha do usuario
function getHumanChoice(){
	let choice = prompt("Digite a sua escolha - pedra, papel ou tesoura: ");
	return choice.toLowerCase();
}

//JOGAR a rodada
function playRound(computer, human, show){
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

//Mostrar resultado da rodada
function showResult(result, hum, comp){
	switch (result){
		case 1:
			console.log( `Voce venceu a rodada! ${hum} vence ${comp}`);
			humanScore++;
		break;
		case 2:
			console.log( `Voce perdeu a rodada! ${comp} vence ${hum}`);
			computerScore++;
		break;
		case 3:
			console.log( `Essa rodada foi um empate!`);
			humanScore++;
			computerScore++;
		break;
	}
}

//Jogar o jogo
function playGame(round, computerChoice, humanChoice, showR){
	
	for(let i = 0; i < 5; i++){
		round(computerChoice(), 
			  humanChoice(), 
			  showR);
	}
	
	if(humanScore > computerScore){
		console.log("Você é o vencedor!");	
	} else if(humanScore == computerScore) {
		console.log("O jogo ficou empado!");
	} else {
		console.log("Game over!");
	}
	
	console.log(`Placar final: `);
	console.log(`Humano: ${humanScore}`);
	console.log(`Computador: ${computerScore}`);
	
}



