function Calc(action, a, b) {
	if (action == 'sum') {
		let result = Number(a) + Number(b);
		alert('Результат вычислений: ' + result);
	} else if (action == 'sub') {
		let result = Number(a) - Number(b);
		alert('Результат вычислений: ' + result);
	} else if (action == 'multi') {
		let result = Number(a) * Number(b);
		alert('Результат вычислений: ' + result);
	} else if (action == 'div') {
		let result = Number(a) / Number(b);
		alert('Результат вычислений: ' + result);
	}
}

let action = prompt('Какую операцию вы хотите выполнить? (sum — сложить, sub — вычесть, multi — умножить, div — разделить)');
if (action == 'sum' || action == 'sub' || action == 'multi' || action == 'div') {
	let a = prompt('Введите первое число');
	if (Number.isInteger(Number(a)) && a != '') {
		let b = prompt('Введите второе число');
		if (Number.isInteger(Number(b)) && b != '') {
			Calc(action, a, b);
		} else {
			alert('Ошибка! Калькулятор принимает только численные значения!')
		}
	} else {
		alert('Ошибка! Калькулятор принимает только численные значения!')
	}
} else {
	alert('Ошибка! Незнакомая команда.')
}