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
        const { data } = await axios.get(`/rooms/${obj.roomId}`);
        setUsers(data.users);
    };

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users
        });
    }


    /**********************************************************************/
    //React.useEffect = ХУК-здесь получают только актуальные данные о том кто зашел в комнату
    //попробовав без него, увидеш разницу!!!
        //БЫЛО РАНЕЕ!!!
    /**
     *     React.useEffect(() => {
        socket.on('ROOM:JOINED', (users) => {
            // console.log('НОВЫЙ ПОЛЬЗОВАТЕЛЬ', users);
            dispatch({
                type: 'SET_USERS',
                payload: users
            });
        });
        socket.on('ROOM:SET_USERS', (users) => {
            // console.log('НОВЫЙ ПОЛЬЗОВАТЕЛЬ', users);
            dispatch({
                type: 'SET_USERS',
                payload: users
            })
        })
    }, [])
     */
    // СОКРАТИЛИ В 3 СТРОКИ!!!
    React.useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers)
    }, [])

    /**********************************************************************/
    window.socket = socket
    // console.log(state)
    return (
        <div>
            {!state.joined ?
                <MainBlock onLogin={onLogin}/>
                :
                <Chat {...state}/>}
        </div>
    );
}

export default App;

// Если юзер не авторизован, то он получает форму ВХОДА, если проверка пройдена,
// теряется блок с комната/имя
//
//!state.joined && <MainBlock onLogin={onLogin}/>}