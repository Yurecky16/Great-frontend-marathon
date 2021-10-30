/* let from = prompt('От кого сообщение?');
let text = prompt('Текст сообщения');

function showMessage(from, text) { // аргументы: from, text
	alert(from + ': ' + text);
}

showMessage(from, text);

 */
function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		// confirm('А родители разрешили?');
		return false;

	}
}

function showMovie(age) {
	if (!checkAge(age)) {
		return;
	}

	alert("Вам показывается кино");
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
	alert('Доступ получен');
} else {
	alert('Доступ закрыт');
}

showMovie(age);