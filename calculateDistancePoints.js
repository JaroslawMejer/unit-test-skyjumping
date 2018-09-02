const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let playerScore;
	let diffrence = distance - kPoint
	// hillSize określam od 1-3, z czego 1 - normal size, 2 - duża, 3 - mamucia.
	switch(hillSize){
		case 1:
			playerScore = 60 + (diffrence * 2);
			break;
		case 2:
			playerScore = 60 + (diffrence * 1.8);
			break;
		case 3: 
			playerScore = 120 + (diffrence * 1.2);
			break;
		default: 
			playerScore = 'Wrong hillSize value!'
	}
	return playerScore;
};

module.exports = calculateDistancePoints;