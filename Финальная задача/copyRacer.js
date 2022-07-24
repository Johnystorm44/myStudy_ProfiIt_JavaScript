"use strict";

class Racer {
    constructor(name, surname, number, rating) {
        this.name = name;
        this,surname = surname;
        this.number = number;
        this.rating = rating;
    }
}
//создать подкласс гонщика с дополнительным полем country
class RacerWithCountry extends Racer {
    constructor(name, surname, number, rating, country) {
        super(name, surname, number, rating);
        this.country = country;
    }
}
//алгоритм для подсчета времени прохождения N этапов 
function timeFirstStage() {
    let time = 0;
    for (let i = 0; i < numStages; ++i) {
        time += Math.random() * 5;
        //Округление до сотых
        time = Math.floor(time * 100) / 100;
    }
}

//алгоритм суммы времени
function timingAndSum(countryArray) {
    let timing = [];
    for (let i = 0; i < countryArray.length; ++i) {
        timing[i] = timeFirstStage(countryArray[i]);
    }
    //суммирование времени прохождения этапов
    let sum = 0;
    for (let i = 0; i < timing.length; ++i) {
        sum += timing[i];
    }
    console.log('Сумма времени: ' + sum);
    return sum;
}

//алгоритм максимального времени гонщиков
function countryCalcTime (countryArray, countryName) {
    console.log(countryName);
    let timing = [];
    for (let i = 0; i < countryArray.length; ++i) {
        timing[i] = timeFirstStage(countryArray[i]);
    }
    console.log(timing);
    let maxTime = Math.max(...timing);
    console.log('Максимальное время: ' + `${countryName}` - `${maxTime}`);
    return maxTime;
}

let timeAll = 0;
let numStages = +prompt('Введите количество этапов: ', '');
if(isNaN(numStages)) {
    alert('Неправильный введеный тип данных по этапам.');
    throw new TypeError;
} else if (numStages === 0)  {
    alert('Вы ввели 0')
}
