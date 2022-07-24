class HashTable {
    constructor () {
        this.hashTable = new Array();
        for(let i = 0; i < 8192; ++i) {
            this.hashTable[i] = new Array();
        }
    }

    hash(city) {
        let unicode = 0;
        for (let i = 0; i < city.length; ++i) {
            let cityCode = city.charCodeAt(i);
            unicode += cityCode;
        }
        let result = unicode % 8192;
        return result.toString(10);
    }

    set(city) {
        let cityHash = this.hash(city);
        let index = this.search(city);    
            if (index == -1) {              
                this.hashTable[cityHash].push(city);
            } 
        }

    search(value) {
    let hashValue = this.hash(value);
    if (this.hashTable[hashValue].length > 0) {

        for (let i in this.hashTable[hashValue]){                   
            if (this.hashTable[hashValue][i] == value) {
                return i;
            }
        }
    }
    return -1;
}
    searchCity(valueCity) {
    let message;
    let hashСity = this.hash(valueCity);
    let res =  this.search(valueCity);
    if (res != -1) {
        message = `Город ${valueСity} в хэш таблице присутствует, хэш ${hashСity}`;
    } else {
        message = `Такого города ${valueCity} нет`;
    }
    return message;  
}
deleteCity(cityToDelete) {
    let message;
    let hashCityToDelete = this.hash(cityToDelete);
    let res = this.search (cityToDelete);
    if (res != -1) {
    this.hashTable[hashCityToDelete].splice(res,1);
    message = `Город ${cityToDelete} с хэшем ${hashCityToDelete} удален из Хэш таблицы`
} else {
    message = `Невозможно удалить такой город`;
}
return message;
}  
}