// // запрос на доступ
// app.get('/rooms/:id', (req, res) => {
//     console.log('ПРИВЕТ')
//     /**
//      * вернёт строку
//      * res.send(rooms)
//      */
//     const {id: roomId} = req.params;
//     const obj = rooms.has(roomId)
//         ? {
//             users: [...rooms.get(roomId).get('users').values()],
//             messages: [...rooms.get(roomId).get('messages').values()]
//         } :
//         {users: [], messages: []}
//     rooms.set('messages', '')
//     res.json(obj)
// });
//
// // // проверка на доступность socket
// // io.on('connection', (socket) => {
// //     console.log('ЮЗЕР ЗАКОНЕКТИЛСЯ', socket.id)
// // })
//
// // проверка на доступность socket, приложение скажет, к нам подключился user с таким то ID!!!
// //
//
// app.post('/rooms', (req, res) => {
//     console.log(' Я POST ЗАПРОС - ПРИВЕТ')
//     // console.log(req.body)
//     const {roomId, userName} = req.body;
//     // ВАЖНО!!!
//     if (!rooms.has(roomId)) {
//         rooms.set(
//             roomId,
//             new Map([
//                 ['users', new Map()],
//                 ['messages', []]
//             ]),
//         );
//     }
//     // console.log(rooms.values())
//     // res.json([...rooms.keys()])
//     // res.json([...rooms.values()])
//     res.send()
// });
//
//
// /**
//  * РАЗГОВОР ДОЛЖЕН БЫТЬ НЕ ОБЩИЙ - КОМНАТА ДОЛЖНА БЫТЬ ИНКАПСУЛИРОВАНА
//  * проверка на доступность socket, приложение скажет, к нам подключился user с таким то ID!!!
//  * очень важно сдесь распределить роли, что бы юзер подключившись к разговору, имелл доступ и просмотр
//  * только с участником этой комнаты
//  * console.log(data) тобразилась информация на back`end о входе нового юзера!!!
//  * rooms.get(roomId).get('users').socket(socket.id, userName)=>
//  * в конкретной комнате, каждому отдельно выдаётся свой личный socket
//  */
//
// io.on('connection', (socket) => {
//     socket.on('ROOM:JOIN', ({roomId, userName}) => {
//         // console.log(data)
//         socket.join(roomId)
//         rooms.get(roomId).get('users').set(socket.id, userName)
//         const users = [...rooms.get(roomId).get('users').values()];
//         //.values(); values получаем именно имена, а не keys = абракадабру, от socket
//         // socket.emit() - Если сделать так то получение запроса от back`end получат все пользователи комнат
//         // socket.to(roomId).broadcast.emit('ROOM:JOINED', users) // ПОЧЕ МУ ТО НЕ РАБОТАЕТ!!!
//         // broadcast - Широковещательная рассылка означает отправку сообщения всем подключенным клиентам!!!
//         socket.broadcast.emit('ROOM:SET_USERS', users)
//     });
//     // ДЛЯ ЧАТА + ПЕРЕДАЁМ ТЕКСТ  ПОЛЬЗОВАТЕЛЯ!!!
//     socket.on('ROOM:NEW_MESSAGE', ({roomId, userName, text}) => {
//         const obj = {
//             userName,
//             text
//         }
//         rooms.get(roomId).get('messages').push(obj)
//         socket.broadcast.emit('ROOM:NEW_MESSAGE', obj)
//     })
//
//
//     socket.on('disconnect', () => {
//         rooms.forEach((value, roomId) => {
//             if (value.get('users').delete(socket.id)) {
//                 const users = [...value.get('users').values()];
//                 socket.broadcast.emit('ROOM:SET_USERS', users);
//             }
//         });
//     });
//
//
//     console.log('ЮЗЕР ЗАКОНЕКТИЛСЯ', socket.id)
// })
//
// // следим за портом
// server.listen(9999, (err) => {
//     if (err) {
//         throw Error(err)
//     }
//     console.log("СЕРВЕР ЗАПУЩЕН")
//
// })