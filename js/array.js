/* Операции с массивами
важность: 5
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл */

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles(Math.floor(styles.length / 2)) = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");


/* Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

function sumInput() {
	let numbers = [];
	while (true) {
		let value = prompt(`Введите число: `);
		if (value === `` || value === null || value === isFinite(value)) break;
		numbers.push(+value);
	}
	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
}




let sum = 0;
for (let number of numbers) {
	sum += number;
}