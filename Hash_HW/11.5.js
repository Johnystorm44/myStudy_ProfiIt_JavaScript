function getHash(password) {

    let sum = 0;
    let result;
    for (let i = 0; i < password.length; i++) {
        sum += password.charCodeAt(i);
    }
    sum = sum % 256;
    result = sum.toString(16);
    return result;
}

function signUp() {
    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");
    let passwordHash = getHash(password);
    let person = {
        login: login,
        passwordHash: passwordHash,
    }

    personList.push(person);
}

function signIn() {
    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");
    let passwordHash = getHash(password);
    let result = personList.find(function (item, index, array) {
        return item.login == login;
    });
    if (result == undefined) {
        alert("Пользователь с таким логином не найден.");
    } else if (result.passwordHash == passwordHash) {
        alert("Вход выполнен успешно.");
    } else {
        alert("Неверный пароль, попробуйте еще раз.");
    }
}
let personList = [];