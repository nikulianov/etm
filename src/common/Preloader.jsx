import React from 'react';
import style from './Preloader.module.scss';
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,

        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

let Preloader = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <CircularProgress />
    </div>
}

export default Preloader