import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import style from './style.css';
import socket from './../../backEnd/socket';
//Установка времени, во время переписки
import moment from 'moment';

//МЕДИА ЗАПРОСЫ ДЛЯ АДАПТИВА
import {StyleSheet, css} from "aphrodite";


const Chat = ({users, messages, userName, roomId, onAddMessage}) => {
    const [messageValue, setMessageValue] = React.useState('');
    const messagesRef = React.useRef(null);
    //МЕДИА ЗАПРОСЫ ДЛЯ АДАПТИВА
    const styles = StyleSheet.create({
        small980: {
            '@media (max-width: 980px)': {
                display: 'none',
            },
        }
    });


    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: messageValue,
        });
        onAddMessage({userName, text: messageValue});
        //для очистки сообщения!!!
        setMessageValue('');
    };

// Работа c ENTER
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            return onSendMessage()
        }

    }
    // при вводе сообщения скролл пролистывается вниз. ВАЖНО!!!
    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 999999)
    }, [messages])

    //Установка хранометража времени!!!
    const timeOfCorr = moment().format("YYYY-MM-DD HH:mm");


    return (
        <div>
            <div className='shell'>
                <Grid container>
                    <Grid item={true} xs={12}>
                        <Typography variant="h3" className="header-message">Chat</Typography>
                    </Grid>
                </Grid>
                <Grid container component={Paper} className={style.chatSection}>
                    <Grid item={true} xs={3} className={style.borderRight500}>
                        <div className="chat-users">
                            Комната: {roomId}
                            <hr/>
                            <b>Онлайн : {users.length}</b>
                            <hr/>
                            <div className={style.marker}>
                            <ul >
                                {users.map((name, index) => (
                                    <li  key={name + index}>{name}</li>
                                ))}
                            </ul>
                                </div>
                        </div>
                        <List style={{'height': '10.5%'}}>
                            <ListItem button key="RemySharp">
                                <ListItemIcon>
                                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                        <Divider />
                            {/*<Grid  item xs={12} style={{padding: '10px'}}>*/}
                            {/*    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth/>*/}
                            {/*</Grid>*/}
                        <Divider/>

                        <List className={css(styles.small980)}>

                            <ListItem button key="RemySharp">
                                <ListItemIcon>
                                    <Avatar alt="PIDARASINARemy Sharp"
                                            src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                </ListItemIcon>
                                <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                                <ListItemText secondary="online" align="right"/>
                            </ListItem>

                            <ListItem button key="Alice">
                                <ListItemIcon>
                                    <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg"/>
                                </ListItemIcon>
                                <ListItemText primary="Alice">Alice</ListItemText>
                                <ListItemText secondary="online" align="right"/>
                            </ListItem>

                            <ListItem button key="CindyBaker">
                                <ListItemIcon>
                                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                                </ListItemIcon>
                                <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                                <ListItemText secondary="online" align="right"/>
                            </ListItem>

                        </List>


                    </Grid>
                    <Grid item xs={9}>
                        <List ref={messagesRef} className={style.messageArea}
                              style={{'overflowY': "scroll", 'height': '328px'}}>
                            {
                                messages.map((message, index) => (

                                    <ListItem key={index}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <ListItemText className='list-text'
                                                              align="right"
                                                              primary={message.text}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <span>{message.userName}</span>
                                                <ListItemText
                                                    align="right"
                                                    secondary={timeOfCorr}/>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                ))}
                        </List>
                        <Divider/>
                        <Grid container
                              style={{'padding': '20px', 'marginTop': '17%',}}>
                            <Grid item xs={11}>
                                <TextField
                                    value={messageValue}
                                    onKeyDown={handleKeyPress}
                                    onChange={(e) => setMessageValue(e.target.value)}
                                    id="outlined-basic-email#2"
                                    label="Message" fullWidth/>
                            </Grid>

                            <Grid item={true} xs={1} align="right">
                                <Fab onClick={onSendMessage} color="primary" aria-label="add">Send</Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Chat;

