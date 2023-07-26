//В отдельном файле ts создайте interface Airplane - самолет с полями:

//numberOfEngines - количество двигателей
//isJet - реактивный
//maxHeight - максимальная высота полета
//capacity - опциональное поле вместимость
//Создайте несколько переменных типа Airplane.

interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

const boeing: Airplane = {
  numberOfEngines: 2,
  isJet: true,
  maxHeight: 13000,
  capacity: 150,
};

const concorde: Airplane = {
  numberOfEngines: 2,
  isJet: true,
  maxHeight: 13000,
  capacity: 130,
};
