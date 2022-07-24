class Racer {
  constructor(name, number, rating, lastname) {
    this.name = name;
    this.number = number;
    this.rating = rating;
    this.lastname = lastname;
  }
}
//создать подкласс гонщика с дополнительным полем country
class RacerWithCountry extends Racer {
  constructor(name, number, rating, lastname, country) {
    super(name, number, rating, lastname);
    this.country = country;
  }
}
//экземпляр гонщиков всех стран
let Russia1 = new RacerWithCountry('Vasya', '1', '5', 'Pupkin', 'Russia');
let Russia2 = new RacerWithCountry('Petya', '2', '4', 'Ivanov', 'Russia');
let Russia3 = new RacerWithCountry('Vasya', '3', '3', 'Sidorov', 'Russia');
let Russia4 = new RacerWithCountry('Petya', '4', '2', 'Petrov', 'Russia');
let russianRacers = [Russia1, Russia2, Russia3, Russia4];

let America1 = new RacerWithCountry('John', '5', '5', 'Smith', 'America');
let America2 = new RacerWithCountry('Jane', '6', '4', 'Doe', 'America');
let America3 = new RacerWithCountry('John', '7', '3', 'Doe', 'America');
let America4 = new RacerWithCountry('Jane', '8', '2', 'Smith', 'America');
let americanRacers = [America1, America2, America3, America4];

let Germany1 = new RacerWithCountry('Max', '9', '5', 'Mustermann', 'Germany');
let Germany2 = new RacerWithCountry('Max', '10', '4', 'Mustermann', 'Germany');
let Germany3 = new RacerWithCountry('Max', '11', '3', 'Mustermann', 'Germany');
let Germany4 = new RacerWithCountry('Max', '12', '2', 'Mustermann', 'Germany');
let germanRacers = [Germany1, Germany2, Germany3, Germany4];

let France1 = new RacerWithCountry('Max', '13', '5', 'Mustermann', 'France');
let France2 = new RacerWithCountry('Max', '14', '4', 'Mustermann', 'France');
let France3 = new RacerWithCountry('Max', '15', '3', 'Mustermann', 'France');
let France4 = new RacerWithCountry('Max', '16', '2', 'Mustermann', 'France');
let frenchRacers = [France1, France2, France3, France4];

let Ukraina1 = new RacerWithCountry('Max', '17', '5', 'Mustermann', 'Ukraine');
let Ukraina2 = new RacerWithCountry('Max', '18', '4', 'Mustermann', 'Ukraine');
let Ukraina3 = new RacerWithCountry('Max', '19', '3', 'Mustermann', 'Ukraine');
let Ukraina4 = new RacerWithCountry('Max', '20', '2', 'Mustermann', 'Ukraine');
let ukrainianRacers = [Ukraina1, Ukraina2, Ukraina3, Ukraina4];

let Finland1 = new RacerWithCountry('Max', '21', '5', 'Mustermann', 'Finland');
let Finland2 = new RacerWithCountry('Max', '22', '4', 'Mustermann', 'Finland');
let Finland3 = new RacerWithCountry('Max', '23', '3', 'Mustermann', 'Finland');
let Finland4 = new RacerWithCountry('Max', '24', '2', 'Mustermann', 'Finland');
let finnishRacers = [Finland1, Finland2, Finland3, Finland4];

let Italy1 = new RacerWithCountry('Max', '25', '5', 'Mustermann', 'Italy');
let Italy2 = new RacerWithCountry('Max', '26', '4', 'Mustermann', 'Italy');
let Italy3 = new RacerWithCountry('Max', '27', '3', 'Mustermann', 'Italy');
let Italy4 = new RacerWithCountry('Max', '28', '2', 'Mustermann', 'Italy');
let italianRacers = [Italy1, Italy2, Italy3, Italy4];

let Spain1 = new RacerWithCountry('Max', '29', '5', 'Mustermann', 'Spain');
let Spain2 = new RacerWithCountry('Max', '30', '4', 'Mustermann', 'Spain');
let Spain3 = new RacerWithCountry('Max', '31', '3', 'Mustermann', 'Spain');
let Spain4 = new RacerWithCountry('Max', '32', '2', 'Mustermann', 'Spain');
let spanishRacers = [Spain1, Spain2, Spain3, Spain4];

//добавить в массив гонщиков всех стран

//количество этапов ввод пользователя
let N = +prompt('Введите количество этапов:');

//подсчет времени прохождения этапов всех гонщиков
let timeAll = 0;
for (let i = 0; i < N; i++) {
  timeAll += time(russianRacers[i]);

  //алгоритм для подсчета времени прохождения этапов N гонщиков
  function time() {
    let time = 0;
    for (let i = 0; i < N; i++) {
      time += Math.random() * 5;
      //округлить до сотых
      time = Math.round(time * 100) / 100;
    }
    return time;
  }

  function TimingAndSum(countryArray) {
    let timing = []
    for (let i = 0; i < countryArray.length; i++) {
      timing[i] = time(countryArray[i]);
    }
    //суммурование времени прохождения этапов
    let sum = 0;
    for (let i = 0; i < timing.length; i++) {
      sum += timing[i];
    }
    console.log("Сумма времени " + sum);
    return sum
  }

  function countryCalcTime(countryArray, countryName) {
    console.log(countryName);
    let timing = []
    for (let i = 0; i < countryArray.length; i++) {
      timing[i] = time(countryArray[i]);
    }
    console.log(timing);
    let maxTime = Math.max(...timing)
    console.log("(Максимальное время) " + `${countryName} - ${maxTime}`);
    //топ по времени
    return maxTime;
  }

  console.log("ПЕРВЫЙ КРУГ И ВЫПОЛНЕНИЕ ЭТАПОВ");

  //add to massive
  esp = countryCalcTime(spanishRacers, "Испания");
  fra = countryCalcTime(frenchRacers, "Франция");
  ger = countryCalcTime(germanRacers, "Германия");
  ukr = countryCalcTime(ukrainianRacers, "Украина");
  rus = countryCalcTime(russianRacers, "Россия");
  usa = countryCalcTime(americanRacers, "Америка");
  fin = countryCalcTime(finnishRacers, "Финляндия");
  ita = countryCalcTime(italianRacers, "Италия");

  let countries = [esp, fra, ger, ukr, rus, usa, fin, ita];
  console.log("МЕСТА СТРАН НА ЭТАПАХ ПЕРВОГО КРУГА");
  //подсчет мест стран по максимальному времени
  function countryPlace() {
    //сортировка стран по времени
    countries.sort(function(a, b) {
      return a - b;
    });
    //в соответствии с массивом напечаттаь страны
    for (let i = 0; i < countries.length; i++) {
      if (countries[i] == esp) {
        console.log(`${i + 1} место - Испания`);
      } else if (countries[i] == fra) {
        console.log(`${i + 1} место - Франция`);
      } else if (countries[i] == ger) {
        console.log(`${i + 1} место - Германия`);
      } else if (countries[i] == ukr) {
        console.log(`${i + 1} место - Украина`);
      } else if (countries[i] == rus) {
        console.log(`${i + 1} место - Россия`);
      } else if (countries[i] == usa) {
        console.log(`${i + 1} место - Америка`);
      } else if (countries[i] == fin) {
        console.log(`${i + 1} место - Финляндия`);
      } else if (countries[i] == ita) {
        console.log(`${i + 1} место - Италия`);
      }
    }
  }
}
countryPlace();

spanish = TimingAndSum(spanishRacers);
french = TimingAndSum(frenchRacers);
german = TimingAndSum(germanRacers);
ukrainian = TimingAndSum(ukrainianRacers);
russian = TimingAndSum(russianRacers);
american = TimingAndSum(americanRacers);
finnish = TimingAndSum(finnishRacers);
italian = TimingAndSum(italianRacers);

//добавить в массив
let countries = [spanish, french, german, ukrainian, russian, american, finnish, italian];
//сортировка по минимальной сумме
countries.sort(function(a, b) {
  return b - a;
});
console.log("МЕСТА СТРАН В ИТОГОВОМ ПРОТОКОЛЕ ПЕРВОГО КРУГА")
  //в соответствии с массивом напечаттаь страны
for (let i = 0; i < countries.length; i++) {
  if (countries[i] == spanish) {
    console.log(`${i + 1} место - Испания`);
  } else if (countries[i] == french) {
    console.log(`${i + 1} место - Франция`);
  } else if (countries[i] == german) {
    console.log(`${i + 1} место - Германия`);
  } else if (countries[i] == ukrainian) {
    console.log(`${i + 1} место - Украина`);
  } else if (countries[i] == russian) {
    console.log(`${i + 1} место - Россия`);
  } else if (countries[i] == american) {
    console.log(`${i + 1} место - Америка`);
  } else if (countries[i] == finnish) {
    console.log(`${i + 1} место - Финляндия`);
  } else if (countries[i] == italian) {
    console.log(`${i + 1} место - Италия`);
  }
}