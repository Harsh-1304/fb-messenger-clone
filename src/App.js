import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Messages from './Messages';
//import {} from '@material-ui/core/FormControl';
import './App.css';
import db from './firebase';
import Flipmove from 'react-flip-move';
import firebase from 'firebase';

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
            <h1>Hello Programmers</h1>
            <h2>Welcome {username} </h2>

            <FormControl>
                <InputLabel>Enter a Message.....</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)} />
                <Button disabled={!input} varient="contained" color="primary" type='submit' onClick={sendMessages}>Send Messege</Button>

            </FormControl>
            {/* <form>
                <input />
            </form> */}


            {/* Messages Displaying */}
            <Flipmove>
                {
                    messages.map(({id, message} ) => (
                        <Messages key={id} messages={message}  username={username} />
                    ))
                }
            </Flipmove>

        </div>
    );
}

export default App;