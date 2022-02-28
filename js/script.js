const arrMail = [
	`mail1@gmail.com`,
	`mail2@gmail.com`,
	`mail3@gmail.com`,
	`mail4@gmail.com`,
	`mail5@gmail.com`,
	`mail6@gmail.com`
];

const inputMail = document.querySelector('#email');
const btnPlay = document.querySelector('#play');
const eleOutput = document.querySelector('.output');

btnPlay.addEventListener('click', function() {
	const mailSearch = inputMail.value;
	inputMail.value = '';

	let found = false;
	for (let i = 0; i < arrMail.length; i++) {
		if (arrMail[i].toLocaleLowerCase() == mailSearch.toLowerCase()) {
			found = true;
		}
	}

	let msg = 'Non puoi giocare';
	if (found) {
		let numComputer = Math.floor(Math.random() * (6) ) + 1;
		let numUser = Math.floor(Math.random() * (6) ) + 1;
		console.log(numComputer, numUser);

		if (numComputer > numUser) {
			msg = 'Ha vinto il computer';
		} else if (numComputer < numUser) {
			msg = 'Hai vinto!';
		} else {
			msg = 'Pareggio';
		}
	}

	eleOutput.innerHTML = msg;
});
