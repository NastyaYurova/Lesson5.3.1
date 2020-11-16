// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let obj1 = {
//     name: 'Kate',
//     age: 15,
//     language: 'Korean'
// }
// let obj2 = {
//     name: 'Finn',
//     age: 30,
//     language: 'English'
// }
// let obj3 = {
//     name: 'Olga',
//     age: 18,
//     language: "Ukrainian"
// }
// let obj4 = {
//     name: 'Dmitro',
//     age: 26,
//     language:'chinese'
// }
//
// let obj5 = {
//     name: "Inna",
//     age: 20,
//     language:'francais'
// }


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//let man = {
//     name: 'Vasya',
//     skills: ['java', 'js', 'c++'],
//     wife: {
//         name: 'Olga',
//         old: 14,
//         children: 'none',

//     }
// }
// let student = {
//     name: 'Petro',
//     place of study: 'Lviv politechika',
//     skills: ['language', 'read books', 'programming'],
// }
// let book = {
//     autor: {
//         Name: 'Taras Shevchenko',
//         married: 'yes',
//         Name of book: 'Kobzar'
//     },
//     number of page = 15,
//     interesting: 'yes',
// }



// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// let obj1 = {
//     name: 'Kate',
//     age: 15,
//     language: 'Korean'
// }
// let obj2 = {
//     name: 'Finn',
//     age: 30,
//     language: 'English'
// }
// let obj3 = {
//     name: 'Olga',
//     age: 18,
//     language: "Ukrainian"
// }
// let obj4 = {
//     name: 'Dmitro',
//     age: 26,
//     language:'chinese'
// }
//
// let obj5 = {
//     name: "Inna",
//     age: 20,
//     language:'francais'
// }
//    for(let key in obj1) {
//       console.log([key]);
// }
// for(let key2 in obj2) {
//     console.log([key2])
// }
// for(let key3 in obj3) {
//     console.log([key3])
// }
// for(let key4 in obj4) {
//     console.log([key4])
// }
// for(let key5 in obj5) {
//     console.log([key5])
// }


// let man = {
//     name: 'Vasya',
//     skills: ['java', 'js', 'c++'],
//     wife: {
//         name: 'Olga',
//         old: 14,
//         children: 'none',

//     }
// }
//let student = {
//     name: 'Petro',
//     place of study: 'Lviv politechnika',
//     skills: ['language', 'read books', 'programming'],
// }
// let book = {
//     autor: {
//         Name: 'Taras Shevchenko',
//         married: 'yes',
//         Name of book: 'Kobzar'
//     },
//     number of page = 15,
//     interesting: 'yes',
// }
//for(let key1 in man){
//      console.log([key1]);
//  }
//  for(let key2 in student){
//      console.log([key2]);
//  }
// for(let key3 in book){
//     console.log([key3]);
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let obj1 = {
//     name: 'Kate',
//     age: 15,
//     language: 'Korean'
// }
// let obj2 = {
//     name: 'Finn',
//     age: 30,
//     language: 'English'
// }
// let obj3 = {
//     name: 'Olga',
//     age: 18,
//     language: "Ukrainian"
// }
// let obj4 = {
//     name: 'Dmitro',
//     age: 26,
//     language:'chinese'
// }
//
// let obj5 = {
//     name: "Inna",
//     age: 20,
//     language:'francais'
// }
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));



//let man = {
//     name: 'Vasya',
//     skills: ['java', 'js', 'c++'],
//     wife: {
//         name: 'Olga',
//         old: 14,
//         children: 'none',

//     }
// }
//let student = {
//     name: 'Petro',
//     place of study: 'Lviv politechika',
//     skills: ['language', 'read books', 'programming'],
// }
// let book = {
//     autor: {
//         Name: 'Taras Shevchenko',
//         married: 'yes',
//         Name of book: 'Kobzar'
//     },
//     number of page = 15,
//     interesting: 'yes',
// }

// console.log(Object.keys(man));
// console.log(Object.keys(student));
// console.log(Object.keys(book));





// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let arr = [
//     {
//         name: 'Mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//     },
//     {
//         name: 'Porshe',
//         old: 10,
//         model: '5-sereis',
//         color: 'orange',
//         comfortable: true,
//     },
//     {
//         name: 'KIA',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//     },
//     {
//         name: 'Wolkswagen',
//         old: 15,
//         model: 'Megane',
//         color: 'black',
//         comfortable: false,
//     },
//     {
//         name: 'Opel',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//     },
//
// {
//     name: 'BMW'
//     old: 3,
//     model: 'X5',
//     color: red,
//     comfortable: true,
// }
// {
//     name: 'Cadilak'
//      old: 8,
//     model: 'Cadillac ATS',
//     color: pink,
//     comfortable: true,
// }
// {
//     name: 'Citroen'
//     old: 6,
//     model: 'C3',
//     color: red,
//     comfortable: true,
// }
// {
//     name:'Ford'
//       old: 20,
//     model: 'Focus',
//     color: blue,
//     comfortable: false,
// }
// {
//     name: 'Fiat'
//     old: 9,
//     model: 'Fiat Aegea',
//     color: red,
//     comfortable: true,
// }
// console.log(arr);


//- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
//     {
//         name: 'Lviv',
//         people: 8500000,
//         country: 'Ukraine',
//
//     },
//     {
//         name: 'Dnipro',
//         people: 2000000,
//         country: 'Ukraine',
//
//     },
//     {
//         name: 'Oslo',
//         people: 3000000,
//         country: 'USA',
//
//     },
//     {
//         name: 'Moscow',
//         people: 2500000,
//         country: 'Germany',
//
//     },
//     {
//         name: 'Madrid',
//         people: 17999999,
//         country: 'Spain',
//
//     },
// ]
// console.log(cities)


// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars = [
//     {
//         name: 'BMW',
//         old: 5,
//         model: 'E-class',
//         color: 'yellow',
//         comfortable: true,
//         driver: {
//             name: 'Alexandra',
//             old: 20,
//             sex: 'women',
//             experience: '5 years',
//         }
//     },
//     {
//         name: 'Ford',
//         old: 10,
//         model: '5-sereis',
//         color: 'black',
//         comfortable: true,
//         driver: {
//             name: 'vasya',
//             old: 35,
//             sex: 'man',
//             experience: '10 years',
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//         driver: {
//             name: 'ira',
//             old: 25,
//             sex: 'woman',
//             experience: '5 years',
//         }
//     },
//     {
//         name: 'Renault',
//         old: 15,
//         model: 'Megane',
//         color: 'white',
//         comfortable: false,
//         driver: {
//             name: 'Andriy',
//             old: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Suzuki',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'Petro',
//             old: 60,
//             sex: 'man',
//             experience: '35 years',
//         }
//     },
// ]
// console.log(cars);

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let arr = [
//     {
//         name: 'Mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//     },
//     {
//         name: 'Porshe',
//         old: 10,
//         model: '5-sereis',
//         color: 'orange',
//         comfortable: true,
//     },
//     {
//         name: 'KIA',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//     },
//     {
//         name: 'Wolkswagen',
//         old: 15,
//         model: 'Megane',
//         color: 'black',
//         comfortable: false,
//     },
//     {
//         name: 'Opel',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//     },
//
// {
//     name: 'BMW'
//     old: 3,
//     model: 'X5',
//     color: red,
//     comfortable: true,
// }
// {
//     name: 'Cadilak'
//      old: 8,
//     model: 'Cadillac ATS',
//     color: pink,
//     comfortable: true,
// }
// {
//     name: 'Citroen'
//     old: 6,
//     model: 'C3',
//     color: red,
//     comfortable: true,
// }
// {
//     name:'Ford'
//       old: 20,
//     model: 'Focus',
//     color: blue,
//     comfortable: false,
// }
// {
//     name: 'Fiat'
//     old: 9,
//     model: 'Fiat Aegea',
//     color: red,
//     comfortable: true,
// }
// console.log(arr);


// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }





// - проитерировать каждый массив из задания 5,6,7 при помощи for in.
// for(let elem of arr){
//     console.log(elem);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for(let key in arr){
//     console.log(key);
// }






//   - взять объекты из задания 1 и превратить каждый в json.
// let obj1 = {
//     name: 'Kate',
//     age: 15,
//     language: 'Korean'
// }
// let abc = JSON.stringify(obj);
// console.log(abc);



// let obj2 = {
//     name: 'Finn',
//     age: 30,
//     language: 'English'
// }

// let abc1 = JSON.stringify(obj2);
// console.log(abc1);


// let obj3 = {
//     name: 'Olga',
//     age: 18,
//     language: "Ukrainian"
// }

// let abc2 = JSON.stringify(obj3);
// console.log(abc2);


// let obj4 = {
//     name: 'Dmitro',
//     age: 26,
//     language:'chinese'
// }

// let abc4 = JSON.stringify(obj4);
// console.log(abc4);
//
// let obj5 = {
//     name: "Inna",
//     age: 20,
//     language:'francais'
// }

// let abc5 = JSON.stringify(obj5);
// console.log(abc5);



// - взять json из задания 11 и превратить их обратно в объекты.
// let obj1 = {
//     name: 'Kate',
//     age: 15,
//     language: 'Korean'
// }
// let abc = JSON.stringify(obj);
// console.log(abc);

// let cba = JSON.parse(abc);
// console.log(cba);

// let obj2 = {
//     name: 'Finn',
//     age: 30,
//     language: 'English'
// }

// let abc1 = JSON.stringify(obj2);
// console.log(abc1);

// let cba2 = JSON.parse(abc1);
// console.log(cba);

// let obj3 = {
//     name: 'Olga',
//     age: 18,
//     language: "Ukrainian"
// }

// let abc2 = JSON.stringify(obj3);
// console.log(abc2);
// let cba3 = JSON.parse(abc2);
// console.log(cba2);

// let obj4 = {
//     name: 'Dmitro',
//     age: 26,
//     language:'chinese'
// }

// let abc4 = JSON.stringify(obj4);
// console.log(abc4);
// let cba4 = JSON.parse(abc4);
// console.log(cba4);
//
// let obj5 = {
//     name: "Inna",
//     age: 20,
//     language:'francais'
// }

// let abc5 = JSON.stringify(obj5);
// console.log(abc5);
// let cba5 = JSON.parse(abc5);
// console.log(cba5);




// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json.

// let arr = [
//     {
//         name: 'Mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//     },
//     {
//         name: 'Porshe',
//         old: 10,
//         model: '5-sereis',
//         color: 'orange',
//         comfortable: true,
//     },
//     {
//         name: 'KIA',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//     },
//     {
//         name: 'Wolkswagen',
//         old: 15,
//         model: 'Megane',
//         color: 'black',
//         comfortable: false,
//     },
//     {
//         name: 'Opel',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//     },
//
// {
//     name: 'BMW'
//     old: 3,
//     model: 'X5',
//     color: red,
//     comfortable: true,
// }
// {
//     name: 'Cadilak'
//      old: 8,
//     model: 'Cadillac ATS',
//     color: pink,
//     comfortable: true,
// }
// {
//     name: 'Citroen'
//     old: 6,
//     model: 'C3',
//     color: red,
//     comfortable: true,
// }
// {
//     name:'Ford'
//       old: 20,
//     model: 'Focus',
//     color: blue,
//     comfortable: false,
// }
// {
//     name: 'Fiat'
//     old: 9,
//     model: 'Fiat Aegea',
//     color: red,
//     comfortable: true,
// }
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
// let js = JSON.stringify(arr[i])
//     console.log(js);
// }



// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json.
// let cities = [
//     {
//         name: 'Lviv',
//         people: 8500000,
//         country: 'Ukraine',
//
//     },
//     {
//         name: 'Dnipro',
//         people: 2000000,
//         country: 'Ukraine',
//
//     },
//     {
//         name: 'Oslo',
//         people: 3000000,
//         country: 'USA',
//
//     },
//     {
//         name: 'Moscow',
//         people: 2500000,
//         country: 'Germany',
//
//     },
//     {
//         name: 'Madrid',
//         people: 17999999,
//         country: 'Spain',
//
//     },
// ]
// console.log(cities)
// for(let elem of cities){
//     let a = JSON.stringify(elem);
//     console.log(a);
// }




// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cars = [
//     {
//         name: 'BMW',
//         old: 5,
//         model: 'E-class',
//         color: 'yellow',
//         comfortable: true,
//         driver: {
//             name: 'Alexandra',
//             old: 20,
//             sex: 'women',
//             experience: '5 years',
//         }
//     },
//     {
//         name: 'Ford',
//         old: 10,
//         model: '5-sereis',
//         color: 'black',
//         comfortable: true,
//         driver: {
//             name: 'vasya',
//             old: 35,
//             sex: 'man',
//             experience: '10 years',
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//         driver: {
//             name: 'ira',
//             old: 25,
//             sex: 'woman',
//             experience: '5 years',
//         }
//     },
//     {
//         name: 'Renault',
//         old: 15,
//         model: 'Megane',
//         color: 'white',
//         comfortable: false,
//         driver: {
//             name: 'Andriy',
//             old: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Suzuki',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'Petro',
//             old: 60,
//             sex: 'man',
//             experience: '35 years',
//         }
//     },
// ]
// console.log(cars);

// for(let elem of cars){
//     let arr1 = [];
//     let s = JSON.stringify(elem)
//     arr1.push(s);
//     console.log(arr1);
// }


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//
// let users = [
//     {
//         name: 'n1',
//         age: 29,
//         skills: ['java', 'python', 'c++'],
//     },
//     {
//         name: 'n2',
//         age: 32,
//         skills: ['java', 'javascript'],
//     },
//     {
//         name: 'n3',
//         age: 19,
//         skills: ['java', 'c#'],
//     },
// ];

// let arr = [];
// for(let user of users){
//     arr.push(user['skills']);
// }
// console.log(arr);





// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
// {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
//for(let user of users){
// //     for(let elem in user){
// //         console.log(user[elem]);
// //     }
// // }
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let arr = [];
// for(let user of users){
//     arr.push(user['address']);
// }
// console.log(arr);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let container = document.querySelector('.container');

// for (let user of users) {

// let newUser = document.createElement("div");
// newUser.innerHTML = `name: ${user.name} age: ${user.age} status: ${user.status}`;
// console.log(newUser);
// container.appendChild(newUser);
// newUser.style.border = ('1px solid black');
// }


//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let elem = document.querySelector('#divka');
// console.log(elem);
// let elem = document.querySelector('.divka');
// console.log(elem);


// - змінити цей текст використовуючи селектори id, class,  tag
// let elem = document.querySelector('#divka');
// elem.innerHTML = 'hello!'
// console.log(elem);
// let elem = document.querySelector('.divka');
// elem.innerHTML = 'hello world';
// console.log(elem);



// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elem = document.getElementById('divka')
// elem.style.width = '300px';
// elem.style.height = '150px';
// console.log(elem);



// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let main = document.createElement('div');
// main.style.width = '300px';
// main.style.height = '150px';
// main.style.backgroundColor = '#000000';

// let body = document.querySelector('body');
// body.appendChild(main);


// for(i = 0; i < 3; i++){
//     let divka = document.createElement('div');
//     divka.style.width = '100px';
//     divka.style.height = '150px';
//     divka.style.border = '1px solid white';
//     main.appendChild(divka);
//     divka.style.display = 'inline-block';
// }

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let main = document.createElement('div');
// main.style.width = '300px';
// main.style.height = '1050px';
// main.style.backgroundColor = '#000000';

// let body = document.querySelector('body');
// body.appendChild(main);



// for(i = 0; i < 30; i++){
//     let divka = document.createElement('div');
//     divka.style.width = '100px';
//     divka.style.height = '100px';
//     divka.style.border = '1px solid white';
//     divka.style.margin = '0px';
//     main.appendChild(divka);
//     divka.style.display = 'inline-block';
//     divka.style.boxSizing = 'border-box';
// }





// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.querySelector('#emptyTable');

// for (let i = 0; i < 10; i++) {
// let tr = document.createElement('tr');

//  for (let j = 0; j < 5; j++) {
// let td = document.createElement('td');
// td.style.border = '1px solid black';
// td.style.width = '200px';
// td.style.height = '50px';
// td.classList.add('forTd')
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }v


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//

// let n = +prompt('Введіть рядки');
// let m = +prompt('Введіть стовпці');
// let table = document.querySelector('#emptyTable');

// for (let i = 0; i < n; i++) {
// let tr = document.createElement('tr');

// for (let j = 0; j < m; j++) {
// let td = document.createElement('td');
// td.style.border = '1px solid black';
// td.style.width = '200px';
// td.style.height = '50px';
// td.classList.add('forTd')
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }


// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії

// - знайти всі елементі, які мають class
//
// const elementsByTagName = document.getElementsByTagName('*');
//
// for (let tag of elementsByTagName) {
//     if (tag.getAttribute('class')){
//     console.log(tag);
//     }
// }


// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//
// let elementsByTagName = document.getElementsByTagName('p');
// for (const element of elementsByTagName) {
//     element.innerText = 'hello oktenweb!'
// }


// - знайти всі div та змінити ім колір на червоний
//
// let elementsByTagName = document.getElementsByTagName('div');
//
// for (const element of elementsByTagName) {
//     element.style.backgroundColor = 'red';
// }