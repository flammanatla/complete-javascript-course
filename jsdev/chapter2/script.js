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

function calcAll(bills) {
	bills.forEach(function (bill) {
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
	});
}

calcAll(bills);

console.log('challenge 3: tips= ' + tips);
console.log('challenge 3: totals= ' + totals);

/* ///////////CHALLENGE 4/////////////////
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


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
****************************/

var johnExpenses = {
	name: 'john',
	bills: [124, 48, 268, 180, 42],
	calcTips: function() {
		this.tips = [];
		this.totals = [];

		for (var i = 0; i < this.bills.length; i++) {
			var tip, total = 0;
			if (this.bills[i] < 50) {
				tip = this.bills[i]*0.2;
			}
			else if (this.bills[i] <= 200 && this.bills[i] >= 50) {
				tip = this.bills[i]*0.15;
			}
			else if (this.bills[i] >200) {
				tip = this.bills[i]*0.1;
			}
			total = this.bills[i] + tip;
			this.tips.push(tip);
			this.totals.push(total); 
		}
	}
};

var markExpenses = {
	name: 'mark',
	bills: [77, 475, 110, 45],
	calcTips: function() {
		this.tips = [];
		this.totals = [];

		for (var i = 0; i < this.bills.length; i++) {
			var tip, total = 0;
			if (this.bills[i] < 100) {
				tip = this.bills[i]*0.2;
			}
			else if (this.bills[i] <= 300 && this.bills[i] >= 100) {
				tip = this.bills[i]*0.10;
			}
			else if (this.bills[i] >300) {
				tip = this.bills[i]*0.25;
			}
			total = this.bills[i] + tip;
			this.tips.push(tip);
			this.totals.push(total); 
		}
	}
};

johnExpenses.calcTips();
markExpenses.calcTips();

console.log(johnExpenses);
console.log(markExpenses);

function calcAverageTips(tips) {
	var sum = 0;
	tips.forEach(function (tip) {
		sum += tip;
	});
	var average = sum / tips.length;
	return average;
}

console.log(johnExpenses.tips, calcAverageTips(johnExpenses.tips));
console.log(markExpenses.tips, calcAverageTips(markExpenses.tips));

function compareAverageTips(person1, person2) {
	if (person1.tips > person2.tips) {
		console.log(person1.name + ' paid more tips: ' + person1.tips);
	}
	else if (person2.tips > person1.tips) {
		console.log(person2.name + ' paid more tips: ' + person2.tips);
	} 
	else {
		console.log('there is a draw!');
	}
}
	
// compareAverageTips({name: "noname", tips: 56}, {name: "anyname", tips: 65});
 compareAverageTips(
	{name: johnExpenses.name, tips: calcAverageTips(johnExpenses.tips)},
 	{name: markExpenses.name, tips: calcAverageTips(markExpenses.tips)}
 );

//compareAverageTips(johnExpenses, markExpenses);
