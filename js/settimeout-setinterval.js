/* Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */
/* 
function printNumbers(from, to) { // объявляем функцию
	let current = from; // объявляем переменную current, присваем ей значение from
  
	let timerId = setInterval(function() { // запоминаем timerId, объявляем функцию...
	  console.log(current); // выводим current
	  if (current == to) { // если cuurent достигла to...
		clearInterval(timerId); // останавливаем интервальный вывод
	  }
	  current++; // инкремент current
	}, 1000); // указываем задержку
  }
  
  // использование:
  printNumbers(5, 10);
 */



function printNumbers(from, to) {
	let current = from;

	function go() {
		console.log(current);
		if (current < to) {
			setTimeout(go, 1000);
		}
		current++;

	}
	go();
}

// использование:
printNumbers(5, 10);