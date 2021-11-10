/* #26.2 Вертикальная строка

Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. Чтобы получилось вот так:

showVerticalMessage('марафон')

М
а
р
а
ф
о
н

Если строка начинается с буквы "м" - нужно вывести эту строку с первой заглавной буквой

Если строка больше 10 символов - вывести только первые 10
 */

let str = prompt(`Строка для «вертикального» вывода:`);

function showVerticalMessage(str, strLength = 10) {
	((str[0] == `м`) || (str[0] == `m`)) ?
		str = str[0].toUpperCase() + str.slice(1) : str;
	for (let char of str.slice(0, strLength)) {
		console.log(char);
	}
}

showVerticalMessage(str);