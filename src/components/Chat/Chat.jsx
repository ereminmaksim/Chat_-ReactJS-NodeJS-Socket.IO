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


const Chat = ({users, messages}) => {
    // const [messageValue, setMessageValue] = React.useState('');

    return (
        <div>
            <div style={{'width': '70%', 'margin': '0 auto'}}>
                <Grid container>
                    {/*<Grid item={true} xs={12}>*/}
                    <Grid item={true} xs={12}>
                        <Typography variant="h3" className="header-message">Chat</Typography>
                    </Grid>
                </Grid>
                <Grid container component={Paper} className={style.chatSection}>
                    <Grid item={true} xs={3} className={style.borderRight500}>
                        <div className="chat-users">
                            Комната: <b>Пользователи</b>
                            <hr/>
                            <b>Онлайн : {users.length}</b>
                            <ul>
                                {users.map((name, index) => (
                                    <li key={name + index}>{name}</li>
                                ))}
                            </ul>
                        </div>
                        <List>
                            <ListItem button key="RemySharp">
                                <ListItemIcon>
                                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                </ListItemIcon>
                                {/*<ListItemText primary="John Wick"></ListItemText>*/}
                            </ListItem>
                        </List>
                        <Divider/>
                        <Grid item xs={12} style={{padding: '10px'}}>
                            <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth/>
                        </Grid>
                        <Divider/>

                        <List>
                            <ListItem button key="RemySharp">
                                <ListItemIcon>
                                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
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
                        <List className={style.messageArea}>
                            <ListItem key="1">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText
                                            align="right"
                                            primary="Hey man, What's up ?"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText
                                            align="right"
                                            secondary="09:30"/>
                                    </Grid>
                                </Grid>

                            </ListItem>

                            <ListItem key="2">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText
                                            style={{"align": "left"}}
                                            primary="Hey, Iam Good! What about you ?"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText
                                            align="left"
                                            secondary="09:31"/>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="3">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText
                                            align="right"
                                            primary="Cool. i am good, let's catch up!"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText
                                            align="right"
                                            secondary="10:30"/>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                        <Divider/>
                        <Grid container style={{'padding': '20px', 'marginTop': '150px'}}>
                            <Grid item xs={11}>
                                <TextField id="outlined-basic-email#2" label="Type Something" fullWidth/>
                            </Grid>
                            <Grid xs={1} align="right">
                                <Fab color="primary" aria-label="add">Send</Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Chat;

