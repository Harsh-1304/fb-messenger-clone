import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Messages from './Messages';
//import {} from '@material-ui/core/FormControl';
import './App.css';
import db from './firebase';
import Flipmove from 'react-flip-move';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

    const [input, setInput] = useState('');
    const [messages, setMesseges] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        db.collection("messages")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setMesseges(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
            })
    }, [])


    useEffect(() => {
        setUsername(prompt("Enter your name"));
    }, [])


    const sendMessages = (event) => {

        event.preventDefault();             // To prevent from the refresh;

        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        )

        // setMesseges([...messages, { username: username, text: input }]);
        setInput('');
    }
    //  console.log(messages);
    return (
        <div className="App">
            <img
                src="https://www.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
                alt="logo"
            />
            <h1>Hello Programmers</h1>
            <h2>Welcome {username} </h2>
            <form className="app__form">
                <FormControl className="app__formControl">
                    <Input
                        className="app__input"
                        placeholder="Enter a message..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <IconButton
                        className="app__iconButton"
                        disabled={!input}
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={sendMessages}
                    >
                        <SendIcon />
                    </IconButton>
                </FormControl>
            </form>

            {/* <form>
                <input />
            </form> */}


            {/* Messages Displaying */}
            <Flipmove>
                {
                    messages.map(({ id, message }) => (
                        <Messages key={id} messages={message} username={username} />
                    ))
                }
            </Flipmove>

        </div>
    );
}

export default App;