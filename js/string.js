
let str = prompt(`строка:`);

/* Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
 */
/*
function ucFirst(str) {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);

}

alert(ucFirst(str));
 */
/*Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 */
/*
function checkSpam(str) {
	let lowerStr = str.toLowerCase
	if (LowerStr.includes(viagra || xxx)) return; 
}

alert(checkSpam(str));
 */


/* Усечение строки
важность: 5
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
 */
let maxlength = prompt(`длина строки`);

function truncate(str, maxlength) {
	return (str.length >= maxlength) ?
		str.slice(0, (maxlength - 1)) + `…` : str;
}

alert(truncate(str, maxlength));