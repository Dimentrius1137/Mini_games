const dateNow = new Date(Date.now());

//экспортиремое константы dateNow в свойство date
 exports.date = dateNow.toLocaleTimeString();
// или можно так: 
// module.exports = { date: dateNow.toLocaleTimeString() }

//объект глобал (создаётся только не в главном модуле, доступ к глобальному свойству есть из любого модуля)
global.name = "Dmitriy"
