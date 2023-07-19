//У вас есть массив объектов:

const cars = [
  { brand: 'BMW', price: 20000, isDiesel: true },
  { brand: 'Mercedes', price: 22000, isDiesel: false },
  { brand: 'Porshe', price: 50000, isDiesel: true },
  { brand: 'Nissan', price: 25000, isDiesel: false },
];

console.log(cars);

//1. Создайте на основе страрого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true},
//{brand: "Mercedes", isDiesel: false}...]

const cars1 = cars.map((car) => {
  return { brand: car.brand, isDiesel: car.isDiesel };
});
console.log(cars1);

//2. Создайте новый массив, где оставьте только машины с дизельным двигателем.

const carsOnlyDiesel = cars.filter((car) => car.isDiesel === true);
console.log(carsOnlyDiesel);

//3. Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const carsNotDiesel = cars.filter((car) => car.isDiesel !== true);
console.log(carsNotDiesel);

//4. Посчитайте общую стоимость всех машин не с дизельным двигателем.

const priceForAllNotDieselCars = carsNotDiesel.reduce(
  (acc, carsNotDiesel) => acc + carsNotDiesel.price,
  0
);
console.log(priceForAllNotDieselCars);

//5. Повысьте цену всех машин в массиве на 20%.

cars.forEach((car) => (car.price = car.price + car.price * 0.2));
console.log(cars);

//6. Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const changeForTesla = cars.map((car) => {
  if (car.isDiesel === true) {
    return { brand: 'Tesla', price: 25000, isDiesel: false };
  }
  return { car };
});

//or via tirnar

const changeForTesla1 = cars.map((car) =>
  car.isDiesel ? { brand: 'Tesla', price: 25000, isDiesel: false } : car
);

console.log(changeForTesla);
