import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Messages.css';
const Messages = forwardRef(({ messages, username }, ref) => {
    const isuser = username === messages.username;

    return (
        <div ref={ref} className={`message ${isuser && 'message__user'}`}>
            <Card className={isuser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        varient="h5"
                        component="h2"
                    >
                        {!isuser && `${messages.username || "Unknown User"}: `}{" "}
                        {messages.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Messages
