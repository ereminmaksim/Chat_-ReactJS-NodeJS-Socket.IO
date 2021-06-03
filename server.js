// подключили библиотеку EXPRESS
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

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


const PORT = process.env.PORT || 3001;


// хранение массива
const rooms = new Map()
/********************************************************************/

app.get('/rooms/:id', (req, res) => {
    const {id: roomId} = req.params;
    const obj = rooms.has(roomId)
        ? {
            users: [...rooms.get(roomId).get('users').values()],
            messages: [...rooms.get(roomId).get('messages').values()],
        }
        : {users: [], messages: []};
    res.json(obj);
});

app.post('/rooms', (req, res) => {
    const {roomId, userName} = req.body;
    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]),
        );
    }
    res.send();
});

io.on('connection', (socket) => {
    socket.on('ROOM:JOIN', ({roomId, userName}) => {
        socket.join(roomId);
        rooms.get(roomId).get('users').set(socket.id, userName);
        const users = [...rooms.get(roomId).get('users').values()];
        socket.broadcast.emit('ROOM:SET_USERS', users);
    });

    socket.on('ROOM:NEW_MESSAGE', ({roomId, userName, text}) => {
        const obj = {
            userName,
            text,
        };
        rooms.get(roomId).get('messages').push(obj);
        socket.broadcast.emit('ROOM:NEW_MESSAGE', obj);
    });

    socket.on('disconnect', () => {
        rooms.forEach((value, roomId) => {
            if (value.get('users').delete(socket.id)) {
                const users = [...value.get('users').values()];
                socket.broadcast.emit('ROOM:SET_USERS', users);
            }
        });
    });

    console.log('user connected', socket.id);
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен!');
});


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




