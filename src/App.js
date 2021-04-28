import React from 'react';
import reducer from "./reducer";
import socket from './backEnd/socket';
import axios from 'axios';

//Компоненты
import MainBlock from "./components/MainBlock/MainBlock.jsx";
import Chat from './components/Chat/Chat'


const App = () => {
    const [state, dispatch] = React.useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: []
    })
    /**********************************************************************/
    const onLogin = async (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj
        });
        socket.emit('ROOM:JOIN', obj)
        const {data} = await axios.get(`/rooms/${obj.roomId}`);
        // setUsers(data.users);
        //ЗДЕСЬ СОХРАНЕНИЕ ИСТОРИИ СООБЩЕНИЙ
        dispatch({
            type: 'SET_DATA',
            payload: data
        });
    }

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users
        });
    }

    //НИЖЕ ПРИ ПЕРЕПИСКЕ ФОРМИРУТСЯ ВЕТКА ДЛЯ ПРОСМОТРА СВОЕГО СООБЩЕНИЯ
    //В РЕЗУЛЬТАТЕ МЫ ВИДЕМ И СВОИ СООБЩЕНИЯ И ПРИНЯТЫЕ!!!

    const addMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message
        })

    }

    /**********************************************************************/
    //React.useEffect = ХУК-здесь получают только актуальные данные о том кто зашел в комнату
    //попробовав без него, увидеш разницу!!!
    // СОКРАТИЛИ В 3 СТРОКИ!!!
    React.useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers)
        socket.on('ROOM:NEW_MESSAGE', addMessage)
    }, [])

    /**********************************************************************/
    window.socket = socket
    // console.log(state)
    return (
        <div>
            {!state.joined ?
                <MainBlock onLogin={onLogin}/>
                :
                <Chat {...state} onAddMessage={addMessage}/>}
        </div>
    );
}

export default App;

// Если юзер не авторизован, то он получает форму ВХОДА, если проверка пройдена,
// теряется блок с комната/имя
//
//!state.joined && <MainBlock onLogin={onLogin}/>}