import React from 'react';
import {Card, CardContent,Typography} from '@material-ui/core';
function Messages(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography
                        color="white"
                        varient="h5"
                        component="h2"
                    >
                        {props.username} : {props.text}
                        {/*   {props.text} */}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Messages
