import React, { useState,useEffect } from 'react';
import { Button,FormControl,Input} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Messages from './Messages';
//import {} from '@material-ui/core/FormControl';
import './App.css';

function App() {

    const [input, setInput] = useState('');
    const [messages, setMesseges] = useState([
        {username:'Harsh',text:'Hello'},
        {username:'Shubham',text:'whats up'}
    ]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(prompt("Enter your name"));
    }, [])


    const sendMessages = (event) => {

        event.preventDefault();             // To prevent from the refresh;

        setMesseges([...messages, {username: username, text: input}]);
        setInput('');
    }
    console.log(messages);
    return (
        <div className="App">
            <h1>Hello Programmers</h1>
            <h2>Welcome {username} </h2>

            <FormControl>
                <InputLabel>Enter a Message.....</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)}/>
                <Button disabled={!input} varient="contained" color="primary" type='submit' onClick={sendMessages}>Send Messege</Button>

            </FormControl>
            {/* <form>
                <input />
            </form> */}


            {/* Messages Displaying */}

            {
                messages.map((message) => {
                    return( 
                        <Messages username={message.username} text={message.text}/>
                    )
                })
            }
        </div>
    );
}

export default App;