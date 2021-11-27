/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.


Это конец учебного года, роковой момент вашего школьного отчета. Необходимо подсчитать средние показатели. Все ученики приходят к вам и просят рассчитать для них средний балл. Легко! Вам просто нужно написать скрипт.

Возвращает среднее значение заданного массива, округленное до ближайшего целого числа.

Массив никогда не будет пустым.*/

function getAverage(marks) {
	return Math.round(marks.reduce((sum, current) => sum + current, 0) / marks.length);
}

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5,]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);