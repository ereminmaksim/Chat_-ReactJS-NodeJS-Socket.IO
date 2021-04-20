// подключили библиотеку EXPRESS
const express = require('express');
const app = express();
/**
 *СОКЕТЫ
 */
// передадим серверу http (создали сервер)
const server = require('http').createServer(app);
// Серверу дали подключение через С О К Е Т Ы!!!(https://socket.io/)
const io = require('socket.io')(server);

/**
 * https://gist.github.com/Shramkoweb/dc98f721a1a2e78072a5dc68d7e8e708
 * РАБОЧАЯ ВЕРСИЯ ОБХОДА ОШИБКИ CORS!!!
 */
//

/********************************************************************/
// хранение массива
const rooms = new Map()
/********************************************************************/

// запрос на доступ
app.get('/rooms', (req, res) => {
console.log('ПРИВЕТ')
    /**
     * вернёт строку
     * res.send(rooms)
     */
    rooms.set('messages', '')
    res.json(rooms)
});

// проверка на доступность socket
io.on('connection', (socket) =>{
    console.log('ЮЗЕР ЗАКОНЕКТИЛСЯ', socket.id)
})

// следим за портом
server.listen(9999, (err)=> {
    if (err){
        throw Error(err)
    }console.log("СЕРВЕР ЗАПУЩЕН")

})






