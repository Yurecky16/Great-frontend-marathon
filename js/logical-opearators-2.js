
/* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора. */

let age = prompt('введите возраст', '18');

if (!(age >= 14 && age <= 90)) {
	alert('yes');
} else {
	alert('no');
}

if (age < 14 || age > 90) {
	alert('yes');
} else {
	alert('no');
}