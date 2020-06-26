import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, TextField} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

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

    var newComment = "";
    const setNewComment = (value) => {
        newComment = value;
    }




    return (
        <div className={classes.root}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={11}>
                    <TextField id="input-with-icon-grid"
                               fullWidth
                               placeholder={typeof userLoggedIn !== 'undefined' ? "댓글을 입력하세요." : "로그인 해주세요."}
                               onChange={event => setNewComment(event.target.value)}/>
                </Grid>
                <Grid item xs>
                    <EditIcon color="primary" size="medium"
                            onClick={() => alert(newComment)} />
                </Grid>
            </Grid>
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
