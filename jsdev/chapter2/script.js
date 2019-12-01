function test42() {
	return 42;
}

function getValue (x) {
	return x;
}

function calcSum (x, y) {
	return x+y;
}

function compare (x, y) {
	return (x < y) ? x : y;
}

////////////CHALLENGE 1/////////////////

// function calcBMI (weight, height) {
// 	return weight / (height * height);
// }

// function compareBMI (m1, kg1, m2, kg2) {
// 	var result = (calcBMI(m1, kg1) < calcBMI(m2, kg2)) ? "person1 is healthier" : "person2 is healthier";
// 	console.log (result);
// }

// compareBMI(1.95, 80, 1.8, 78);

/////////////////////////////////////////

function calcSquare (a, b) {
	return (b === undefined) ? a*a : a * b;
}

var sqSq = calcSquare(6);
var sqRect = calcSquare(2, 3);

var result = (sqSq > sqRect) ? "Square is bigger" : "Rectangular is bigger"; 
console.log(result);

////////////////CHALLENGE 2/////////////////

var resultsJohn = [1000, 0, 0];
var resultsMark = [1000, 0, 0];
var resultsMary = [1000, 0, 0];

function calcScore(results) {
	var sum = 0;
	results.forEach(calcSum);

	function calcSum(result) {
		sum += result;
	}
	return sum/results.length;
}

var scoreJohn = calcScore(resultsJohn);
var scoreMark = calcScore(resultsMark);
var scoreMary = calcScore(resultsMary);

function announceWinner(scoreMark, scoreJohn, scoreMary) {
	if ((scoreJohn > scoreMark) && (scoreJohn > scoreMary)) {
		return "John is better";
	}
	else if ((scoreMark > scoreJohn) && (scoreMark > scoreMary)) {
		return "Mark is better";
	}
	else if ((scoreMary > scoreJohn) && (scoreMary > scoreMark)) {
		return "Mary is better";
	}
	else 
		return "There is a draw";

}
var winner = announceWinner(scoreMark, scoreJohn, scoreMary);
console.log(winner);

///////////CHALLENGE 3/////////////////
/*John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
*/

var bills = [124, 48, 268];
var tips = [];
var totals = [];

function calcTotal(bills) {
	bills.forEach(calcTip);

	function calcTip(bill) {
		var tip, total = 0;
		if (bill < 50) {
			tip = bill*0.2;
		}
		else if (bill >= 50 && bill <= 200) {
			tip = bill*0.15;
		}
		else if (bill > 200) {
			tip = bill*0.1;
		}
		total += bill + tip; 
		tips.push(tip);
		totals.push(total);
	}
}

calcTotal(bills);

console.log(tips);
console.log(totals);

/* ///////////CHALLENGE 3/////////////////
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
*/

var john = {
	fullName: 'John Smith',
	mass: '90',
	height: '1.75',
	calcBMI: function () {
		return this.bmi = this.mass / (this.height * this.height);
	}
};

var mark = {
	fullName: 'Mark Blade',
	mass: '95',
	height: '1.75',
	calcBMI: function () {
		return this.bmi = this.mass /(this.height * this.height);
	}
};

function compareBMI(john, mark) {
	var johnBmi = john.calcBMI();
	var markBmi = mark.calcBMI();

	if (johnBmi > markBmi) {
		console.log(john.fullName + ' has the highest BMI equal to ' + john.bmi);
	}
	else if (markBmi > johnBmi) {
		console.log(mark.fullName + ' has the highest BMI equal to ' + mark.bmi);
	}
	else {
		console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI equal to ' + john.bmi);
	}
};

compareBMI(john, mark); 















