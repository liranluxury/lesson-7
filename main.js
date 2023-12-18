"use strict";

// 1. *Создание и отображение информации о человеке:*

// * Создайте объект person с свойствами name, age, и occupation.
// * Присвойте значения каждому свойству, например, person.name = 'John Doe', person.age = 30, и person.occupation = 'Software Engineer'.
// * Отобразите полную информацию о человеке с помощью операторов console.log или вложенным циклом.
const person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
};
console.log(person.name);
console.log(person.age);
console.log(person.occupation);
const { name, ...ahter } = person;
console.log(name, ahter);
//***************************************** */
// 2. *Сортировка и фильтрация данных об учениках:*

// * Создайте массив students, содержащий несколько объектов, представляющих собой учеников.
// * Объект каждого ученика должен иметь свойства, такие как name, age, grade, и favoriteSubject.
// * Отсортируйте массив учеников по свойству name с помощью Array.prototype.sort().
// * Перебирайте отсортированный массив и отображайте информацию о каждом ученике.
const students = [
  {
    name: "Алексей",
    age: 15,
    grade: 9,
    favoriteSubject: "Математика",
  },
  {
    name: "Елена",
    age: 14,
    grade: 8,
    favoriteSubject: "Литература",
  },
  {
    name: "Иван",
    age: 16,
    grade: 10,
    favoriteSubject: "История",
  },
];

const studenrtsSort = [...students].sort((a, b) => a.name - b.name);
console.log(studenrtsSort);
students.forEach((student) => {
  console.log(
    `Name: ${student.name}, age: ${student.age}, grade: ${student.grade}, favoriteSubject: ${student.favoriteSubject} `
  );
});
//***************************************** */
// 3. *Добавление продуктов к инвентарю:*

// * Создайте объект product с свойствами name, price, quantity, и description.
// * Определите функцию addProduct(), которая принимает новый объект product в качестве аргумента.
// * Внутри функции проверьте, существует ли массив products. Если нет, создайте его.
// * Добавьте новый объект продукта в массив products и обновите инвентарь.
// * Отобразите сообщение для подтверждения добавления продукта.
const apple = {
  name: "Яблоко",
  price: 0.99,
  quantity: 50,
  description: "Свежие и сочные яблоки, идеальны для ежедневного употребления",
};

const orange = {
  name: "Апельсин",
  price: 1.49,
  quantity: 30,
  description: "Сочные и витаминные апельсины для здорового завтрака.",
};

const avocado = {
  name: "Авокадо",
  price: 2.99,
  quantity: 20,
  description:
    "Свежие авокадо, отличный выбор для приготовления здоровых блюд.",
};

let products = [];
function addProduct(obj) {
  products.push(obj);
  //   alert(`Продукт ${obj.name} добавлен`);
  return products;
}

addProduct(apple);
addProduct(orange);
addProduct(avocado);
console.log(products);
//***************************************** */
// 4. *Расчет стоимости автомобиля на основе атрибутов:*

// * Создайте объект car с свойствами brand, model, year, color, и engineType.
// * Определите функцию getCarValue(), которая принимает объект car в качестве входных данных.
// * Рассчитайте стоимость автомобиля с помощью формулы:

// javascript
// price = (brandMultiplier * modelMultiplier) * year + (colorMultiplier * engineMultiplier);

// * Верните рассчитанную стоимость автомобиля.
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Silver",
  engineType: "Gasoline",
};
function getCarValue(car) {
  let brandMultiplier = 1.5;
  let modelMultiplier = 1.2;
  let colorMultiplier = 0.8;
  let engineMultiplier = 1.3;
  let price =
    brandMultiplier * modelMultiplier * car.year +
    colorMultiplier * engineMultiplier;
  return price;
}
console.log(getCarValue(car));
//***************************************** */
// 5. *Определение диеты животного на основе типа:*

// * Создайте объект animal с свойствами type, name, age, weight, и species.
// * Определите функцию getAnimalDiet(), которая принимает объект animal в качестве входных данных.
// * Используйте условные операторы для определения диеты животного на основе его типа:

// javascript
// if (animal.type === 'хищник') {
//   diet = 'мясо';
// } else if (animal.type === 'травоядное') {
//   diet = 'растительность';
// } else {
//   diet = 'всеядно';
// }

// * Верните установленное свойство diet.
const omnivoreAnimal = {
  type: "всеядное",
  name: "Рекс",
  age: 5,
  weight: 25,
  species: "Собака",
};
const predatorAnimal = {
  type: "хищник",
  name: "Тигр",
  diet: "Хищник",
  species: "Panthera tigris",
};
const herbivoreAnimal = {
  type: "травоядное",
  name: "Корова",
  diet: "Травоядное",
  species: "Bos taurus",
};
function getAnimalDiet(animal) {
  let diet = "";
  if (animal.type === "хищник") {
    console.log((diet = "мясо"));
  } else if (animal.type === "травоядное") {
    console.log((diet = "растительность"));
  } else {
    console.log((diet = "любая еда"));
  }
  return diet;
}
getAnimalDiet(herbivoreAnimal);
getAnimalDiet(predatorAnimal);
getAnimalDiet(omnivoreAnimal);
//***************************************** */
// 6. *Расчет возраста книги на основе года публикации:*

// * Создайте объект libraryBook с свойствами title, author, genre, yearOfPublication, и numberOfPages.
// * Определите функцию getBookAge(), которая принимает объект libraryBook в качестве входных данных.
// * Вычислите возраст книги (текущий год - год публикации) и сохраните его в переменной age.
// * Верните вычисленное значение age.
const libraryBook = {
  title: "Приключения Тома Сойера",
  author: "Марк Твен",
  genre: "Приключения",
  yearOfPublication: 1876,
  numberOfPages: 224,
};

function getBookAge(obj) {
  let ageBook = 2023 - obj.yearOfPublication;
  return ageBook;
}
console.log(getBookAge(libraryBook));
//***************************************** */
// 7. *Проверка правильности логина и пароля пользователя:*

// * Создайте объект user с свойствами login, password, email, firstName, и lastName.
// * Определите функцию validateUserCredentials(), которая принимает объект user в качестве входных данных.
// * Проверите, совпадают ли предоставленные учетные данные с предварительно заданными действительными парами логина и пароля.
// * Верните сообщение, указывающее, являются ли учетные данные действительными или нет.
const user = {
  login: "user1213",
  password: "securePassword123",
  email: "user@example.com",
  firstName: "Sagi",
  lastName: "Omer",
};
function validateUserCredentials(user) {
  let login = "user123";
  let password = "securePassword123";
  if (user.login === login && user.password === password) {
    console.log("You are ok!");
  } else {
    console.log("Try again!");
  }
}
validateUserCredentials(user);
//***************************************** */
// 8. *Отслеживание статуса заказа и информации о доставке:*

// * Создайте объект order с свойствами customer, items, totalPrice, orderDate, shippingAddress, и paymentMethod.
// * Определите функцию getOrderDeliveryStatus(), которая принимает объект order в качестве входных данных.
// * Основываясь на предоставленных условиях, возвращайте соответствующее сообщение о состоянии доставки заказа:

// javascript
// if (!order.shippingAddress) {
//   status = 'Заказ ожидает доставки';
// } else if (order.paymentMethod === 'PayPal') {
//   status = 'Заказ обрабатывается';
// } else {
//   status = 'Заказ готов к отправке';
// }
const order = {
  customer: "Liran",
  items: ["Product 1", "Product 2", "Product 3"],
  totalPrice: 150.5,
  orderDate: "2023-11-22",
  shippingAddress: "Nesher",
  paymentMethod: "card",
};
function getOrderDeliveryStatus(order) {
  if (!order.shippingAddress) {
    statusOrder = "Заказ ожидает доставки";
  } else if (order.paymentMethod === "PayPal") {
    statusOrder = "Заказ обрабатывается";
  } else {
    statusOrder = "Заказ готов к отправке";
  }
} //не поняла в чем задание? было уже все решено
