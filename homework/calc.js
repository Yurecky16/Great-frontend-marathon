/* #14.1 Немного практики

Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.

Пример вызова такой функции 

Calc(‘sum’, 1, 2) - возвращает 3
Calc(‘multi’, 1, 2) - возвращает 2

И так далее, со всеми математическими действиями, которые вы изучили в задаче #7

Но и это еще не все. 

Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами. 

В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”
 */


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