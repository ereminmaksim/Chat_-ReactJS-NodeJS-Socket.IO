// ДЕСЬ ВСЯ РАБОТА С СОКЕТАМИ!!!
import io from 'socket.io-client';
// НЕ ВЕРНОЕ РЕШЕНИЕ!!!
// const socket = io('http://localhost:9999')
// const socket = io();
// ВЕРНОЕ РЕШЕНИЕ ПОЛИТИКА CORS
/**
 *
 * @type {Socket}
 * const socket = io('http://localhost:9999', {transports: ['websocket']})
 * это надо использовать в package.json
 * ВАЖНО СМОТРЕТЬ НИЖЕ, СОККЕТЫ ПЕРЕНЕСЕНЫ В PACKAGE.JSON
 */
const socket = io();
export default socket;