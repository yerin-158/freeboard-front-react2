import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '12 6 0 0',
        textAlign: 'center',
        color: theme.palette.error.light,
    },
}));

export default function Comments({comments, userLoggedIn}) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            {comments.map((comment, index) => {
                return (
                    <Grid container spacing={1}>
                        <Grid item xs>
                            {comment.writer.accountId}
                        </Grid>
                        <Grid item xs={6}>
                            {comment.contents}
                        </Grid>
                        <Grid item xs>
                            {comment.createdAt.monthValue + '/' + comment.createdAt.dayOfMonth + ' (' + comment.createdAt.hour + ':' + comment.createdAt.minute + ')'}
                            {comment.writer.accountId === userLoggedIn ? ' X' : null }
                        </Grid>
                    </Grid>
                )}
            )}
        </div>
    );
}
