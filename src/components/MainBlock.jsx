import React from 'react';
import {Button, TextField} from "@material-ui/core";
import socket from "../back-end/socket";

const MainBlock = () => {
    return (
        <div className='wrapper'>
            <div className='joinBlock'>
                <TextField style={{'display':"block", 'marginBottom':'10px'}}
                           id="outlined-basic1" label="ROOM" variant="outlined" type='text'/>
                <TextField id="outlined-basic2" label="Ваше Имя" variant="outlined" type='text'/>
                <Button style={{'display':"block", 'marginTop': '10px', 'padding': '6px 86px'}}
                        variant="contained" color="primary">Войти
                </Button>
            </div>
        </div>
    );
};
export default MainBlock;
