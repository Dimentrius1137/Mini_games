
//импорт модуля
const module1 = require('./module');

//передача параметров в приложение (0 и 1 элементы массива путь к node и путь к файлу приложения остальное своё то что вбивается в терминал)
const pathName = process.argv[1];
const username = process.argv[2];
const userage = process.argv[3];
// console.log(username + " " + userage + " in path " + pathName)

console.log("start at:" + module1.date + ` hello ${global.name}`)