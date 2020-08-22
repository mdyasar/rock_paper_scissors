var pScore= 0;
var cScore= 0;

var name= prompt("Enter your name:");
if(name != "null"){
	if(name != ""){
		document.getElementById("player-name").innerHTML= name;
	}
}

function startGame(){
	const playBtn= document.getElementById("play-btn");
	const intro= document.querySelector(".intro");
	const match= document.querySelector(".match");
	playBtn.addEventListener("click", () => {
		intro.classList.add("fadeOut");
		match.classList.add("fadeIn");
	});
}

function playMatch(){
	const options= document.querySelectorAll(".options button");
	const playerHand= document.querySelector(".player-hand");
	const computerHand= document.querySelector(".computer-hand");

	const computerOptions= ["rock", "paper", "scissors"];

	options.forEach(option => {
		option.addEventListener("click", function(){
			const compNum= Math.floor(Math.random()*3);
			const computerChoice= computerOptions[compNum];

			let rtn= compare(this.textContent,computerChoice);

			updateScore();

			playerHand.src= `img/${this.textContent}.png`;
			computerHand.src= `img/${computerChoice}.png`;

			border(rtn);

			roundEnd();
		});
	});
}

function border(rtn){
	const playerHand= document.querySelector(".player-hand");
	const computerHand= document.querySelector(".computer-hand");
	if(rtn == -1){
		playerHand.classList.add("grey-glow");
		computerHand.classList.add("grey-glow");
		setTimeout(function(){
			playerHand.classList.remove("grey-glow");
		    computerHand.classList.remove("grey-glow");
		}, 300);
	}
	else if(rtn == 0){
		playerHand.classList.add("red-glow");
		computerHand.classList.add("green-glow");
		setTimeout(function(){
			playerHand.classList.remove("red-glow");
			computerHand.classList.remove("green-glow");
		}, 300);
	}
	else if(rtn == 1){
		playerHand.classList.add("green-glow");
		computerHand.classList.add("red-glow");
		setTimeout(function(){
			playerHand.classList.remove("green-glow");
		    computerHand.classList.remove("red-glow");
		}, 300);
	}
}

function updateScore(){
	const playerScore= document.querySelector(".player-score p");
	playerScore.textContent= pScore;
	const compScore= document.querySelector(".computer-score p");
	compScore.textContent= cScore;
}

function compare(pChoice, cChoice){
	const winner= document.getElementById("winner");
	if(pChoice === cChoice){
		winner.innerHTML = "It is a tie!";
		return(-1);
	}
	if(pChoice === "rock"){
		if(cChoice === "scissors"){
			winner.innerHTML = "You win!";
			pScore++;
			return(1);
		}
		else{
			winner.innerHTML = "Computer wins!";
			cScore++;
			return(0);
		}
	}
	if(pChoice === "paper"){
		if(cChoice === "scissors"){
			winner.innerHTML = "Computer wins!";
			cScore++;
			return(0);
		}
		else{
			winner.innerHTML = "You win!";
			pScore++;
			return(1);
		}
	}
	if(pChoice === "scissors"){
		if(cChoice === "paper"){
			winner.innerHTML = "You win!";
			pScore++;
			return(1);
		}
		else{
			winner.innerHTML = "Computer wins!";
			cScore++;
			return(0);
		}
	}
}

function roundEnd(){
	updateScore();
	if(pScore == 10){
		alert("You win this round! Reloading for next round...");
		setTimeout(function(){location.reload();}, 2000);
	}
	else if(cScore == 10){
		alert("Computer wins this round! Reloading for next round...");
		setTimeout(function(){location.reload();}, 2000);
	}
}


startGame();
playMatch();