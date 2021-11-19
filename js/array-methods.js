/* Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

/* function camelize(str) {
	let arr = str.split(`-`);
	let arrUpperCase = arr.map(
		(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
	)
	return arrUpperCase.join(``)
}

alert(camelize("background-color"))// == 'backgroundColor';
alert(camelize("list-style-image"))// == 'listStyleImage';
alert(camelize("-webkit-transition")) // == 'WebkitTransition'; */

//====================================================================================================================

/* Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений) */

/* function filterRange(arr, a, b) {
	let arrFiltered = arr.filter(item => (a <= item && item <= b));
	return arrFiltered;
}

let arr = [15, 13, 80, 10, 56, 41, 32, 35, 82];

let filtered = filterRange(arr, 10, 40);

alert(filtered); // 3,1 (совпадающие значения)

alert(arr); // 5,3,8,1 (без изменений) */

//====================================================================================================================

/* Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1] */

/* function filterRangeInPlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++) {
		if (a >= arr[i] || arr[i] >= b) {
			arr.splice(i, 1);
			i--;
		}
	}
}

let arr = [15, 13, 80, 10, 56, 41, 32, 35, 82];

filterRangeInPlace(arr, 10, 45); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1] */

//====================================================================================================================

/* Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10 */

/* let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => a - b);

alert(arr); // 8, 5, 2, 1, -10  */

//====================================================================================================================

/* Скопировать и отсортировать массив
важность: 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) */

/* function copySorted(arr) {
	return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)  */

//====================================================================================================================

/* Создать расширяемый калькулятор
важность: 5
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок. */

/* function Calculator() {

	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b,
	};

	this.calculate = function (str) { //функция вычисления

		let split = str.split(` `);
		let a = +split[0];
		let op = split[1];
		let b = +split[2];

		if (!this.methods[op] || isNaN(a) || isNaN(b)) { // проверка введённых данных
			return NaN;
		}
		return this.methods[op](a, b);
	};

	this.addMethod = function (name, func) { // функция добавления операции
		this.methods[name] = func;
	};
}


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 3");
alert(result); // 8

result = powerCalc.calculate("2 ** 3");
alert(result); // 8

result = powerCalc.calculate("2 - 3");
alert(result); // 8

result = powerCalc.calculate("2 + 3");
alert(result); // 8 */

//====================================================================================================================

/* Трансформировать в массив имён
важность: 5
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = ... ваш код

alert( names ); // Вася, Петя, Маша */

/* function arrNameCreate(arr) {
	arr.forEach(element => arrName.push(element.name));
	return arrName;
} */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(element => element.name);

alert(names); // Вася, Петя, Маша */

//====================================================================================================================

/* Трансформировать в объекты
важность: 5
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = ... ваш код ...


usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка. */

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(element => ({ fullName: element.name + ` ` + element.surname, id: element.id }));

alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // Вася Пупкин */

//====================================================================================================================

/* Отсортировать пользователей по возрасту
важность: 5
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя */

/* function sortByAge(users) {
	users.sort((a, b) => a.age - b.age);
}


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name + ` ` + arr[0].age); // Вася
alert(arr[1].name + ` ` + arr[1].age); // Маша
alert(arr[2].name + ` ` + arr[2].age); // Петя */

//====================================================================================================================

/* Перемешайте массив
важность: 3
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая. */

/* function shuffle(array) {
	array.sort(() => Math.random() - 0.5); // В этой строке стандарная функция sort подменяется выраженинем «Math.random() - 0.5», которая читается так: случайное число от 0 до 1 (не включая 1) минус 0.5. Из этого получается, что при сравнении двух элементов массива случайным образом выбирается тот, что будет стоять выше, т.к. возможные результаты функции sort могут быть отрицательными, положительными или равными нулю (в зависимости от того что выдаст функция Math.random() )
	return array;
}

let arr = [1, 2, 3];

alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr)); */

//====================================================================================================================

/*  */