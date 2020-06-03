document.querySelectorAll('button').forEach(btn =>
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		randomize();
		computerSelections(event);
	}
	));
	
	const randomize = () => {
		const random = [
			'<i class="far fa-hand-rock"></i>',
  			'<i class="far fa-hand-scissors"></i>',
  			'<i class="far fa-hand-paper"></i>'
  		];
  		let randomIcon = random[Math.floor(Math.random() * random.length)];
  		document.querySelector('#computerSelection').innerHTML = randomIcon;
	};

	const computerSelections = (event) => {
		let playerSelection = event.target.className;
		let computerSelection = document.querySelector('#computerSelection').innerHTML 
		let resultBanner = document.querySelector('#result')

		if (
			(playerSelection.includes("scissors") && computerSelection.includes("paper"))||
				(playerSelection.includes("rock") && computerSelection.includes("scissors"))||
					(playerSelection.includes("paper") && computerSelection.includes("rock"))
			){
				resultBanner.textContent = computerSelection
				resultBanner.innerHTML = "You Won!";
			}else if(
				(playerSelection.includes("scissors") && computerSelection.includes("rock"))||
					(playerSelection.includes("rock") && computerSelection.includes("paper"))||
						(playerSelection.includes("paper") && computerSelection.includes("scissors"))
					){
						resultBanner.innerHTML = "Ouch. You Lost!";
					}else
						{
							resultBanner.innerHTML = "It's a draw!";
						}
	}