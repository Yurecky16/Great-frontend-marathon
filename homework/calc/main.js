let line = document.getElementById('line');
let clear = document.getElementById('c');
let del = document.getElementById('del');
let division = document.getElementById('division');
let multiplication = document.getElementById('multiplication');
let subtracting = document.getElementById('subtracting');
let adding = document.getElementById('adding');
let equals = document.getElementById('equals');
let action;
let a;

let numbers = document.querySelectorAll('.num');

for (let num of numbers) {
	num.onclick = function () {
		if (line.textContent == '0') {
			line.textContent = '';
			line.textContent = line.textContent + num.textContent;
		} else {
			line.textContent = line.textContent + num.textContent;
		}
	}
}

clear.onclick = function () {
	line.textContent = "0";
};
del.onclick = function () {
	if (line.textContent.slice(-2, -1) == '.') {
		line.textContent = line.textContent.slice(0, (line.textContent.length - 2));
	} else {
		line.textContent = line.textContent.slice(0, (line.textContent.length - 1));
	}
};

function saveA() {
	a = line.textContent;
	line.textContent = 0;
}

division.onclick = function () {
	action = '/';
	saveA();
}

multiplication.onclick = function () {
	action = '*';
	saveA();
}

subtracting.onclick = function () {
	action = '-';
	saveA();
}

adding.onclick = function () {
	action = '+';
	saveA();
}

equals.onclick = function () {
	line.textContent = Calc(action, +a, +line.textContent);
	if (line.textContent.slice(6, 7) == '.') {
		line.textContent = line.textContent.slice(0, 6) + '…';
	} else {
		line.textContent = line.textContent.slice(0, 7)
	}
}

function Calc(action, a, b) {
	if (action == '+') {
		return a + b;

	} else if (action == '-') {
		return a - b;

	} else if (action == '*') {
		return a * b;

	} else if (action == '/') {
		return a / b;

	}
}