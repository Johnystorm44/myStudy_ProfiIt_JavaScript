class Racer {
    constructor(id, name, surname, rating) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.rating = rating;
    }

    time = [];
    place = [];

    addTime(time) {
        this.time.push(time);
    }
    addPlace(p) {
        this.place.push(p);
    }
    clearResults() {
        this.time = [];
        this.place = [];
    }
}
class Country {
    constructor(name) {
        this.name = name;
    }

    racer = [];
    place = [];
    total;

    addRaser(id, name, surname, rating) {
        this.racer.push(new Racer(id, name, surname, rating));
    }
    addPlace(p) {
        this.place.push(p);
    }
    clearResults() {
        this.place = [];
        this.racer.forEach(r => {
            r.clearResults();
        });
    }
    /// для вывода результатов этапа
    showLastResults() {
        let out = this.name + ' (' + last(this.place) + '): ';
        this.racer.forEach(r => {
            out += r.surname + ' - ' + last(r.place) + '(' + last(r.time) + ') | ';
        });
        console.log(out);
    }
    /// для вывода результатов круга
    showTotalResult() {
        console.log(this.name + ' (' + this.total + '): ');
    }
    // сумма мест для общего зачета
    summPlace() {
        this.total = 0;
        this.place.forEach(p => {
            this.total += p;
        });
    }
    // для сравнения по лучшим
    getBest() {
        return Math.max(...this.place);
    }
    // для сравнения по среднему рейтингу
    getAverage() {
        let sumRat = 0;
        this.racer.forEach(r => {
            sumRat += r.rating;
        });
        return sumRat / this.racer.length;
    }
}
// =======================================================

function last(arr) {
    return arr[arr.length - 1];
}
// указатели для сортировок
__FIRST = 0; // по первому
__LAST = 1;  // по последнему
__BESTPL = 2;// по лучшему месту в заезде
__AVERAT = 3;// по среднему рейтингу

var countries = [];

// add racers
function _addRacers() {
    countries.push(new Country('Россия'));
    countries[0].addRaser('1', 'Alexander', 'Golovin', '18');
    countries[0].addRaser('2', 'Igor', 'Akinfeev', '35');
    countries[0].addRaser('3', 'Roman', 'Pavluchenko', '9');
    countries[0].addRaser('4', 'Andrey', 'Arshavin', '10');

    countries.push(new Country('США'));
    countries[1].addRaser('5', 'John', 'Smith', '11');
    countries[1].addRaser('6', 'Jane', 'Doe', '17');
    countries[1].addRaser('7', 'John', 'Doe', '19');
    countries[1].addRaser('8', 'Jane', 'Smith', '3');

    countries.push(new Country('Германия'));
    countries[2].addRaser('9', 'Manuele', 'Neuer', '1');
    countries[2].addRaser('10', 'Tomas', 'Muller', '7');
    countries[2].addRaser('11', 'Phillip', 'Lahm', '4');
    countries[2].addRaser('12', 'Michael', 'Ballack', '6');

    countries.push(new Country('Франция'));
    countries[3].addRaser('13', 'Killian', 'Mbappe', '7');
    countries[3].addRaser('14', 'Paul', 'Pogba', '6');
    countries[3].addRaser('15', 'Ngolo', 'Kante', '5');
    countries[3].addRaser('16', 'Karim', 'Benzema', '2');

    countries.push(new Country('Англия'));
    countries[4].addRaser('17', 'Wayne', 'Rooney', '10');
    countries[4].addRaser('18', 'Harry', 'Kane', '9');
    countries[4].addRaser('19', 'Trent', 'Alexander-Arnold', '3');
    countries[4].addRaser('20', 'Rahim', 'Sterling', '7');

    countries.push(new Country('Нидерланды'));
    countries[5].addRaser('21', 'Edwin', 'Van Der Sar', '1');
    countries[5].addRaser('22', 'Robin', 'Van Persie', '9');
    countries[5].addRaser('23', 'Dirk', 'Kuyt', '5');
    countries[5].addRaser('24', 'Wesley', 'Snejder', '4');

    countries.push(new Country('Италия'));
    countries[6].addRaser('25', 'Luca', 'Toni', '9');
    countries[6].addRaser('26', 'Alexandro', 'Del Piero', '10');
    countries[6].addRaser('27', 'Gianluigi', 'Buffon', '11');
    countries[6].addRaser('28', 'Franchesco', 'Totti', '5');

    countries.push(new Country('Испания'));
    countries[7].addRaser('29', 'Andreas', 'Iniesta', '6');
    countries[7].addRaser('30', 'Iker', 'Cassilias', '1');
    countries[7].addRaser('31', 'Sergio', 'Ramos', '4');
    countries[7].addRaser('32', 'Fernando', 'Torres', '9');
}

/// ===== для вывода в консоль =====
function showLastRes(N) {
    console.log('Этап ' + (N + 1) + ':');
    countries.forEach(country => {
        country.showLastResults();
        // console.log(country);
    });
    console.log('----------------------');
}
function showTotalRes() {
    countries.forEach(country => {
        country.showTotalResult();
    });
    console.log('----------------------');
}
function showRacers() {
    countries.forEach(country => {
        console.log(country);
        console.log(country.racer);
    });
}
/// ---------------------------------

// ======== обработка данных ===========
// сортировка общего списка
function sortRacers(times) {
    return new Map([...times.entries()].sort((a, b) => {
        return a[1] - b[1];
    }));
}
// обработка результатов этапа
function sortRacersBy(sortType, times) {
    let sorted = sortRacers(times); // отсортированный массив
    let temp = Array.from(sorted.keys()); // массив ключей (индекс = место в забеге)

    // добавляем в структуру места гонщиков в заезде
    countries.forEach(country => {
        country.racer.forEach(racer => {
            temp.find((el, ind) => {
                if (el === racer.id) {       // ищем гонщика в списке
                    racer.addPlace(ind + 1);  // записываем его место
                    return true;
                }
                return false;
            }); //
        });
        // определяем место страны в заезде
        let needPlace = country.racer[0].place[0]; // искомое место
        country.racer.forEach(racer => {
            let place = last(racer.place);
            if (sortType == __LAST) {    // по наихудшему месту
                if (place > needPlace) {
                    needPlace = place;
                }
            } else if (sortType == __FIRST) { // по наилучшему месту
                if (place < needPlace) {
                    needPlace = place;
                }
            }
        });
        country.addPlace(needPlace);
    });


}
// обработка результатов круга
function sortTotalBy(sortType) {
    countries.forEach(c => {
        c.summPlace();
    });

    for (let k = 1; k < countries.length; k++) {    // пузырек
        for (let i = 0; i < countries.length - k; i++) {
            let left = countries[i].total;
            let rithg = countries[i + 1].total;
            let toSwap = false;
            if (left > rithg)   // если страна левее имеет большую сумму
                toSwap = true;  // то нужно менять местами
            else if (left == rithg) { // если суммы равны
                if (sortType == __BESTPL) { // сравниваем по лучшему месту
                    if (countries[i].getBest() > countries[i + 1].getBest()) {
                        toSwap = true;
                    }
                } else if (sortType == __AVERAT) {// или по среднему рейтингу
                    if (countries[i].getAverage() < countries[i + 1].getAverage()) {
                        toSwap = true;
                    }
                }
            }
            if (toSwap) {    // есть нужно менять 
                let t = countries[i];
                countries[i] = countries[i + 1];
                countries[i + 1] = t;
            }
        }
    }

}
// заполнить время гонщиков
function setRandomTimes() {
    let times = new Map();
    countries.forEach(c => {
        c.racer.forEach(r => {
            let time = Math.random() * 2 + 5;       // время 6(+-1) мин 
            time = Math.round(time * 100) / 100;    // округлить до сотых
            times.set(r.id, time);   // время гонщика в общем списке
            r.addTime(time);         // время в списке страны    
        });
    });
    return times;
}
// сброс результатов предыдущего круга
function clearResults() {
    countries.forEach(c => {
        c.clearResults();
    });
}
// --- начало программы ---
_addRacers();

let N = +prompt('Введите количество этапов:');
if (isNaN(N)) {
    alert('Неправильные введенные данные, запустите программу еще раз!');
    throw new TypeError;
}

// Этапы первого круга
for (let n = 0; n < N; n++) {
    let times = setRandomTimes();

    // сортировка гонщиков и итоги стран по худшему
    sortRacersBy(__LAST, times);

    /// вывод результатов круга
    showLastRes(n);
}
// total result
sortTotalBy(__BESTPL);

console.log('Общий результат первого круга:')
showTotalRes();

clearResults();

let startSecEthap = confirm('Подтвердите начало второго круга?');

if(startSecEthap == false) {
	alert('Вы не подтвердили второй этап соревнований, запустите программу')
    throw new Error;
} else {
// выборка 4 лучших
countries = countries.slice(0, 4);


// Этапы второго круга
for (let n = 0; n < 2; n++) {
    let times = setRandomTimes();

    // сортировка... итоги - по лучшему
    sortRacersBy(__FIRST, times);

    /// вывод результатов круга
    showLastRes(n);
}
sortTotalBy(__AVERAT);
console.log('Общий результат второго круга:')
showTotalRes();

countries = countries.slice(0, 1);
console.log('Победитель соревнования: ');
showTotalRes();

}