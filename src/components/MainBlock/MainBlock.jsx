import React from 'react';
import {Button, TextField} from "@material-ui/core";
import axios from 'axios';





const MainBlock = ({ onLogin }) => {
    /**********************************************************************/
    const [roomId, setRoomId] = React.useState('');
    const inpOneState = (event) => {
        setRoomId(event.target.value)
    }
    /**********************************************************************/
    const [userName, setUserName] = React.useState('');
    const inpTwoState = (event) => {
        setUserName(event.target.value)
    }
    /**********************************************************************/
    const [isLoading, setLoading] = React.useState(false);
    /**********************************************************************/
    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Неверные данные');
        }
        const obj = {
            roomId,
            userName,
        };
        setLoading(true);
        await axios.post('/rooms', obj)
        onLogin(obj);
    };
    /**********************************************************************/

    return (
        <div className='wrapper'>
            <div className='joinBlock'>
                <TextField
                    id="outlined-basic2"
                    onChange={inpOneState}
                    label="Номер Комнаты" variant="outlined" type='text' value={roomId}/>
                <TextField style={{'display': "block", 'marginTop': '10px'}}
                           id="outlined-basic1"
                           onChange={inpTwoState}
                           label="Ваше Имя" variant="outlined" type='text' value={userName}/>
                <Button disabled={isLoading} onClick={onEnter} style={{'display': "block", 'marginTop': '10px', 'padding': '6px 86px'}}
                        variant="contained" color="primary">
                    {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
                </Button>
            </div>
        </div>
    );
};
export default MainBlock;
