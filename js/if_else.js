/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

let ansver = prompt('Какое "официальное" название JavaScript?', '');

if (ansver == 'ECMAScript') {
	alert('Правильно!');
} else {
	alert('Не знаете? “ECMAScript”!');
}