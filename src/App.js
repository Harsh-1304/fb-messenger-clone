import React, { useState } from 'react';
import { Button,FormControl,Input} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
//import {} from '@material-ui/core/FormControl';
import './App.css';

function App() {

    const [input, setInput] = useState('');
    const [messages, setMesseges] = useState(['X', 'Y', 'Z']);


    const sendMessages = (event) => {

        event.preventDefault();             // To prevent from the refresh;

        setMesseges([...messages, input]);
        setInput('');
    }
    console.log(messages);
    return (
        <div className="App">
            <h1>Hello Programmers</h1>

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
                    return <p> {message} </p>
                })
            }
        </div>
    );
}

export default App;