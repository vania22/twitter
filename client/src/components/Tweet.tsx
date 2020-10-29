import React from 'react';
import classnames from 'classnames';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { Avatar, Paper, Typography, Grid, IconButton } from '@material-ui/core';

import { useHomeStyles } from '../pages/Home/theme';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
    text: string;
    time: string;
}

export const Tweet: React.FC<TweetProps> = ({
    classes,
    user,
    text,
    time,
}: TweetProps): React.ReactElement => {
    return (
        <Paper
            variant="outlined"
            className={classnames(classes.tweetsHeader, classes.tweet)}
        >
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar
                        alt={`${user.username} avatar`}
                        src={user.avatarUrl}
                    />
                </Grid>
                <Grid item xs={11}>
                    <Typography className={classes.tweetsUserInfo}>
                        <b>{user.fullname}</b> @{user.username} · {time}
                    </Typography>
                    <Typography variant="body1">{text}</Typography>
                    <div className={classes.tweetFooter}>
                        <div className={classes.tweetIconContainer}>
                            <IconButton>
                                <ChatBubbleOutlineIcon />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div className={classes.tweetIconContainer}>
                            <IconButton>
                                <RepeatIcon />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div className={classes.tweetIconContainer}>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div className={classes.tweetIconContainer}>
                            <IconButton>
                                <ReplyIcon />
                            </IconButton>
                            <span>1</span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};
