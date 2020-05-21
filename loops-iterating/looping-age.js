let loopingAge = function(age) {
	let rlSync = require('readline-sync');

	let currentAge = Number(rlSync.question('What is your current age?\n'));

	for (var future = 10; future <= 40; future += 10) {
		console.log(`In ${future} years you will be ${currentAge + future} years old.`);
	}
};

loopingAge(37);
