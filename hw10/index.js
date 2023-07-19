//Создайте классы: Plant, Rose.
//Роза должна наследовать Растение. Пусть у растения будут поля:
//рост,
//возраст.
//И метод grow, который увеличивает его рост на 10 см.

//У розы должно быть поле - количество бутонов (numberOfFlowers).
//Создайте объект класса розы, вызовите метод.

class Plant {
  constructor(height, age) {
    this.height = height;
    this.age = age;
  }
  grow() {
    this.height += 10;
  }
}

class Rose extends Plant {
  constructor(height, age, numberOfFlowers) {
    super(height, age);
    this.numberOfFlowers = numberOfFlowers;
  }
}

const blackRose = new Rose(50, 1, 7);

console.log(blackRose);
blackRose.grow();
console.log(blackRose);
