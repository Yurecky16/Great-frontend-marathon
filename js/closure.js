/* Сумма с помощью замыканий
важность: 4
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4 */

/* function sum(a) {
	return function(b) {
		return a + b;
	}
}
 */

// =====================================================================

/* Фильтрация с помощью функции
важность: 5
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:

/* .. ваш код для inBetween и inArray *//*
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2 */


/* function inBetween(a, b) {
	return function (x) {
		return x >= a && x <= b;
	};
}


function inArray(arr) {
	return function (x) {
		arr.includes(x);
	};
}
 */

// =====================================================================

/* Сортировать по полю
важность: 5
У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, скажем, вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть, чтобы вместо функции, мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого. */
/* 
function byField(params) {
	return (a, b) => a.[params] > b.[params] ? 1 : -1;
}
 */

// =====================================================================

/* Армия функций
важность: 5
Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
	let shooter = function() { // функция shooter
	  alert( i ); // должна выводить порядковый номер
	};
	shooters.push(shooter);
	i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
 */
/* 
function makeArmy() {
	let shooters = [];

	/* 	let i = 0;
		while (i < 10) { */
/* 
for (let i = 0; i < 10; i++) { }
let shooter = function () { // функция shooter
	alert(i); // должна выводить порядковый номер
};
shooters.push(shooter);

	//   i++;
}

return shooters;
}

let army = makeArmy();
 * /
 */
// ========================================================

/* Задача с CodeWars

This is a simple exercise to understand the feature in the javascript language called closure.

The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.

Простое упражнение для понимания замыкания.

Функция buildFun вернёт массив функций. Единственный параметр принимаемый buildFun это количество элементов N возвращаемого массива.

Желаемый результат, - чтобы после выполнения всех функций число от 0  до  N  было возвращено.*/


// Далее решение без замены var на let, но с использованием объявления переменной через let. Как по мне не совсем тру=)

function buildFun(n) {

	var res = []

	for (var i = 0; i < n; i++) {
		let j = i;
		res.push(function () {
			return j;
		})
	}
	return res
}


// А тут решение без let вообще с применени IIFE - immediately-invoked function expressions, что означает функцию, запускаемую сразу после объявления.

function buildFun(n) {

	var res = []

	for (var i = 0; i < n; i++) {
		(function () {
			var j = i;
			res.push(function () { return j; });
		})();
	};
	return res
}