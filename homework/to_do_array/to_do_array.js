/* #29.2 TODO. Теперь уже по-настоящему

Согласитесь, после чтения статьи, вам стало очевидно что для задачи с TODO вам нужен именно массив, а никак не объект?

При чем, еще интереснее будет иметь массив объектов, например такой:

const list = [ 
{ 
	id: 1,
	name: 'create a post', 
	status: 'TODO’, 
	priority: 'low'  
}, 
{ 
	id: 2,
	name: 'test', 
	status: 'Done', 
	priority: 'high'  
} 
] 

Вы знаете что делать :)

#29.3 TODO. Бонус

Только для самых крутых, которые еще 2 часа назад закончили TODO на массивах

Сделайте возможность выбирать группировку для вывода. Например 
showBy(‘priority’) - чтобы выводил по приоритетам 

high:
   test
   somethin else
low: 
	-

чтобы можно было вызывать showBy(‘priority’) или showBy(‘status’)

 */


let idCount = 0;

const list = [
	{
		id: 1,
		name: 'create a post',
		status: 'TODO',
		priority: 'low'
	},
	{
		id: 2,
		name: 'test',
		status: 'Done',
		priority: 'high'
	}
]


function addTask() {
	let taskName = prompt('Введите название новой задачи:');
	list.push({
		id: idCount,
		name: taskName,
		status: `TODO`,
		priority: `low`
	});
	++idCount;
}

function changeStatus() {
	let taskName = prompt('Введите название или id задачи, чей статус хотите изменить:');
	list.forEach(task => {
		if (task.name == taskName || task.id == taskName) {

			let statusId = prompt('Текущий статус задачи: ' + task.status + '\n' + 'Выберите новый статус задачи из приведённого списка:' + '\n' + '1 - Todo' + '\n' + '2 - In Progress' + '\n' + '3 - Done');

			switch (statusId) {
				case '1':
					task.status = `ToDo`;
					break;

				case '2':
					task.status = `InProgress`;
					break;

				case '3':
					task.status = `Done`;
					break;
			}
		}
	});
}

function changePriority() {
	let taskName = prompt('Введите название или id задачи, чей приоритет хотите изменить:');
	list.forEach(task => {
		if (task.name == taskName || task.id == taskName) {

			let priorityId = prompt('Текущий приоритет задачи: ' + task.priority + '\n' + 'Выберите новый статус задачи из приведённого списка:' + '\n' + '1 - low' + '\n' + '2 - normal' + '\n' + '3 - hight');

			switch (priorityId) {
				case '1':
					task.priority = `low`;
					break;

				case '2':
					task.priority = `normal`;
					break;

				case '3':
					task.priority = `hight`;
					break;
			}
		}
	});
}

function deleteTask() {
	let taskName = prompt('Введите название или id задачи, которую хотите удалить:');
	list.forEach(task => {
		if (task.name == taskName || task.id == taskName) {
			list.splice(list.indexOf(task), 1);
		}
	});
}

function showList() {
	console.log(list);
}

// addTask();
// deleteTask();
// changeStatus();
// changePriority();
// showList();
// console.log(idCount);
