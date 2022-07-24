function getHash(password) {
    let res;
    let sum = 0;
    for (let i = 0; i < password.length; ++i) {
        sum += password.charCodeAt(i);
    }
    sum %= 256;
    res = sum.toString(16);
    return res;
}

function signUp() {
    let log = prompt('Введите логин: ','');
    let pass = prompt('Введите пароль: ','');
    let passHash = getHash(pass);
    let user = {
        log: log,
        passHash: passHash
    }

    userList.push(user);
}

function signIn() {
    let log = prompt('Введите логин: ','');
    let pass = prompt('Введите пароль:','');
    let passHash = getHash(pass);
    let res = userList.find(function (item, index, array) {
        return item.log === log;
    });
    if (res === undefined) {
        console.log('Пользователь с таким логином не найден.','');
    } else if (res.passHash == passHash) {
        console.log('Вход выполнен успешно.','');
    } else {
        console.log('Неверный пароль, попробуйте еще раз.','');
    }
}
let userList = [];
