// подключили библиотеку EXPRESS
const express = require('express');
const app = express();
const cors = require('cors')
/********************************************************************/
/**
 * https://gist.github.com/Shramkoweb/dc98f721a1a2e78072a5dc68d7e8e708
 * РАБОЧАЯ ВЕРСИЯ ОБХОДА ОШИБКИ CORS!!!
 */
/********************************************************************/
app.use(cors())
/********************************************************************/
/**
 *СОКЕТЫ
 */
// передадим серверу http (создали сервер)
const server = require('http').createServer(app);
// Серверу дали подключение через С О К Е Т Ы!!!(https://socket.io/)
const io = require('socket.io')(server);
/********************************************************************/
// ПОЛУЧАЕМ НА ВЫХОДЕ JSON
/**
 * Возвращает промежуточное программное обеспечение, которое анализирует только json и
 * просматривает запросы только там, где заголовок Content-Type соответствует параметру type.
 */
/********************************************************************/
app.use(express.json())
/********************************************************************/
//Расширенная опция позволяет выбирать между анализом данных, закодированных в URL-адресе,
//с помощью библиотеки строк запроса (при значении false) или библиотеки qs (при значении true).
// *--------------app.use(express.urlencoded({extended: true}))--------------*

/********************************************************************/
// хранение массива
const rooms = new Map()
/********************************************************************/

// запрос на доступ
app.get('/rooms/:id', (req, res) => {
    console.log('ПРИВЕТ')
    /**
     * вернёт строку
     * res.send(rooms)
     */
    const {id: roomId} = req.params;
    const obj = rooms.has(roomId)
        ? {
            users: [...rooms.get(roomId).get('users').values()],
            messages: [...rooms.get(roomId).get('messages').values()]
        } :
        {users: [], messages: []}
    rooms.set('messages', '')
    res.json(obj)
});

// // проверка на доступность socket
// io.on('connection', (socket) => {
//     console.log('ЮЗЕР ЗАКОНЕКТИЛСЯ', socket.id)
// })

// проверка на доступность socket, приложение скажет, к нам подключился user с таким то ID!!!


app.post('/rooms', (req, res) => {
    console.log(' Я POST ЗАПРОС - ПРИВЕТ')
    // console.log(req.body)
    const {roomId, userName} = req.body;
    // ВАЖНО!!!
    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['messages', []]
            ]),
        );
    }
    // console.log(rooms.values())
    // res.json([...rooms.keys()])
    // res.json([...rooms.values()])
    res.send()
});


/**
 * РАЗГОВОР ДОЛЖЕН БЫТЬ НЕ ОБЩИЙ - КОМНАТА ДОЛЖНА БЫТЬ ИНКАПСУЛИРОВАНА
 * проверка на доступность socket, приложение скажет, к нам подключился user с таким то ID!!!
 * очень важно сдесь распределить роли, что бы юзер подключившись к разговору, имелл доступ и просмотр
 * только с участником этой комнаты
 * console.log(data) тобразилась информация на back`end о входе нового юзера!!!
 * rooms.get(roomId).get('users').socket(socket.id, userName)=>
 * в конкретной комнате, каждому отдельно выдаётся свой личный socket
 */

io.on('connection', (socket) => {
    socket.on('ROOM:JOIN', ({roomId, userName}) => {
        // console.log(data)
        socket.join(roomId)
        rooms.get(roomId).get('users').set(socket.id, userName)
        const users = [...rooms.get(roomId).get('users').values()];
        //.values(); values получаем именно имена, а не keys = абракадабру, от socket
        // socket.emit() - Если сделать так то получение запроса от back`end получат все пользователи комнат
        // socket.to(roomId).broadcast.emit('ROOM:JOINED', users) // ПОЧЕ МУ ТО НЕ РАБОТАЕТ!!!
        // broadcast - Широковещательная рассылка означает отправку сообщения всем подключенным клиентам!!!
        socket.broadcast.emit('ROOM:SET_USERS', users)
    })
    //ОТЛАВЛИВАЕМ USER
    socket.on('disconnect', () => {
        rooms.forEach((value, roomId) => {
            if (value.get('users').delete(socket.id)) {
                const users = [...value.get('users').values()];
                socket.broadcast.emit('ROOM:SET_USERS', users)
            }
        })
    })


    console.log('ЮЗЕР ЗАКОНЕКТИЛСЯ', socket.id)
})

// следим за портом
server.listen(9999, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log("СЕРВЕР ЗАПУЩЕН")

})


// НЕ ЗАБЫТЬ ПРО NODEMON
/**
 * npm i nodemon
 * nodemon - это инструмент, который помогает разрабатывать
 приложения на основе node.js путем автоматического перезапуска
 приложения node при обнаружении изменений файлов в каталоге.
 */


/**
 * npm i axios
 * Axios — это широко известная JavaScript-библиотека.
 * Она представляет собой HTTP-клиент, основанный на промисах и
 * предназначенный для браузеров и для Node.js.
 *
 * Axios — это широко известная JavaScript-библиотека. Она представляет собой
 * HTTP-клиент, основанный на промисах и предназначенный для браузеров и для
 * Node.js. Если вы работали в последние несколько лет JavaScript-программистом,
 * то вы, совершенно определённо, этой библиотекой пользовались. В октябре 2019
 * года пакет Axios был загружен из npm 25 миллионов раз. Кажется, что будущее
 * Axios безоблачно.
 */





