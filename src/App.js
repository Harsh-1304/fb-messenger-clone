import React, { useState } from 'react';
import './App.css';

function App() {

    const [input, setInput] = useState('');
    const [messages, setMesseges] = useState(['X', 'Y', 'Z']);


    const sendMessages = (event) => {
        setMesseges([...messages, input]);
        setInput('');
    }
    console.log(messages);
    return (
        <div className="App">
            <h1>Hello Programmers</h1>

            <input value={input} onChange={event => setInput(event.target.value)} />
            <button onClick={sendMessages}>Send Messege</button>
        </div>
    );
}

export default App;