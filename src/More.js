import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        height:"100%",
        flex:1
    },
}));

export default function More() {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <h1 align ="center">OHHHHH</h1>
            <h2 align ="center">Page More</h2>
        </div>
    )
}