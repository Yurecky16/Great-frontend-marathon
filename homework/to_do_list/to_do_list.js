/* #23 Практика

Сегодня напишем самый простой TODO лист без графического интерфейса.

Хранилищем будет объект, а имена задач - ключами.

const list = {
 "create a task": "In Progress",
 "make a bed": "Done",
 "write a post": "To Do",
}

Функция changeStatus - будет менять статус задачи

changeStatus("write a post", "Done")

Функция addTask - добавляет новую задачу

addTask('have a walk')

Функция deleteTask - удаляет задачу

deleteTask('have a walk')

Функция showList будет выводить весь список дел в виде

Todo:
 "create a task",
 "make a bed",
In Progress:
 "write a post"
Done:
 -

Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль */


function changeStatus() {
	let taskName = prompt('Введите заголовок задачи, чей статус хотите изменить:');
	let taskStatus = prompt('Текущий статус задачи: ' + list[taskName] + '\n' + 'Выберите новый статус задачи из приведённого списка:' + '\n' + '1 - Todo' + '\n' + '2 - In Progress' + '\n' + '3 - Done');

	start: switch (taskStatus) {
		case '1':
			list[taskName] = "Todo";
			break
		case '2':
			list[taskName] = "In Progress";
			break
		case '3':
			list[taskName] = "Done";
			break;
		default:
			alert("4ego 6/\9ITb?");
			break start;
	}

	alert('Статус задачи: ' + taskName + ' изменён на: ' + list[taskName]);
	again();
}

function addTask() {
	let taskName = prompt('Введите название новой задачи:');
	list[taskName] = 'Todo';
	alert('создана новая задача: "' + taskName + '" со статусом: "' + list[taskName] + '"');
	again();
}

function deleteTask() {
	let taskName = prompt('Введите название задачи, которую хотите удалить:');
	if (list[taskName] === undefined) {
		alert('Задачи с таким именем не существует');
		again();
	} else {
		delete list[taskName];
		alert('Задача: "' + taskName + '" удалена.');
		again();
	}
}

function showList() {
	for (let key in list) {
		if (list == {}) {
			alert('А задач-то нет!');
		} else {
			alert(key + ': ' + list[key]);
		}
	}
	again();
}

let i = 1;

function again() {
	let toStart = prompt('Хотите сделать что-нибуть ещё? Y/N');
	if (toStart == 'y') {
		i = 1;
	} else if (toStart == 'n') {
		i = 0;
		alert('good bye!')
	} else {

	}
}

const list = {
	"Test1": "check1",
	"Test0": "check0",
	"Test2": "check2",
};

while (i == 1) {

	let command = +prompt('Какое действие вы хотели бы совершить?' + '\n' + '(введите число от 1 до 4)' + '\n' + '1 - Изменить статус задачи.' + '\n' + '2 - Добавить новую задачу.' + '\n' + '3 - Удалить задачу.' + '\n' + '4 - Посмотреть список дел.', 4);

	switch (command) {
		case 1:
			changeStatus();
			break
		case 2:
			addTask();
			break
		case 3:
			deleteTask();
			break
		case 4:
			showList();
			break
		default:
			alert("4ego 6/\9ITb?");
			break
	}
}