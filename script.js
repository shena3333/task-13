// Деструктуризация объекта: Дан объект с информацией о пользователе. Извлеките с помощью деструктуризации имя, возраст и email в переменные
//  из объекта пользователя.

const user5 = { name5: 'Иван', age5: 25, email5: 'ivan@example.com' }; 
const {name5,age5,email5}=user5;
const user5name=name5;
const user5age=age5;
const user5email=email5;

// Деструктуризация вложенных объектов: имеется объект с информацией о книге, включая автора, который также является объектом. Используйте 
// деструктуризацию, чтобы извлечь название книги и имя автора в переменные.
const book = { title: 'Война и мир', author: { firstName: 'Лев', lastName: 'Толстой' } }; 
const {title}=book;
const titleBook=title;
const {firstName,lastName}=book.author;
const author=`${firstName} ${lastName}`;

// Деструктуризация массивов: Дан массив с именами. Используйте деструктуризацию, чтобы извлечь первое и второе имя в отдельные переменные.
const names = ['Иван', 'Алексей', 'Светлана'];
const [nameF,nameS]=names;
const nameFirst=nameF;
const nameSecond=nameS;

// Пропуск значений в массиве: имеется массив чисел. Используйте деструктуризацию, чтобы извлечь первое и третье число, пропустив второе.
const numbers = [1, 2, 3, 4, 5]; 
const [num1,,num3]=numbers;
const numFirst=num1;
const numThird=num3;

// Использование остаточных параметров: Дан массив с несколькими значениями. Используйте деструктуризацию для извлечения первых двух элементов 
// в переменные и оставшиеся элементы поместите в новый массив.
const fruits = ['яблоко', 'банан', 'апельсин', 'киви', 'манго']; 
const [fruit1,fruit2,...someFruit]=fruits;
const fruitFirst=fruit1;
const fruitSecond=fruit2;
const newFruits=someFruit;

// Деструктуризация параметров функции (почитайте про это в интернете): Создайте функцию, которая принимает объект с параметрами и использует
//  деструктуризацию для извлечения этих параметров в переменные внутри функции и выводит результат в консоль.
function displayUserInfo({name,age,email}) {
	console.log(name,age,email)
}
const user = { name: 'Петр', age: 30, email: 'petr@example.com' };
displayUserInfo(user);

// Значения по умолчанию в деструктуризации: Дан объект с информацией о пользователе, но некоторые поля (например возраст - age) могут 
// отсутствовать. Используйте деструктуризацию со значениями по умолчанию, чтобы избежать ошибок при отсутствии данных.
const user2 = { name2: 'Иван', email2: 'ivan@example.com' };
const {name2,email2, age2=20}=user2;
