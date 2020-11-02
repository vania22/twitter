import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Grid,
    Hidden,
    Typography,
    Paper,
    Divider,
    Avatar,
    IconButton,
} from '@material-ui/core';

import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import { useHomeStyles } from './theme';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';
import SearchTextField from '../../components/SearchTextField';

import { fetchTweets } from '../../store/ducks/tweets/actions';
import { selectTweetsItems } from '../../store/ducks/tweets/selectors';

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);

    React.useEffect(() => {
        dispatch(fetchTweets());
    }, []);

    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={2} sm={1} md={1} lg={2}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={9} sm={9} md={7} lg={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper
                            variant="outlined"
                            className={classes.tweetsHeader}
                        >
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        <AddTweetForm classes={classes} />
                        <Divider
                            style={{ height: 10, backgroundColor: '#253341' }}
                        />
                        {tweets.map((tweet) => (
                            <Tweet
                                key={tweet._id}
                                user={tweet.user}
                                text={tweet.text}
                                time={tweet.time}
                                classes={classes}
                            />
                        ))}
                    </Paper>
                </Grid>
                <Hidden smDown>
                    <Grid
                        item
                        sm={3}
                        md={2}
                        lg={4}
                        className={classes.rightSide}
                    >
                        <SearchTextField classes={classes} />
                        <Paper className={classes.whatsHappeningContainer}>
                            <Typography variant="h6">
                                What’s happening
                            </Typography>
                            <Divider />
                            <Paper className={classes.whatsHappeningTweet}>
                                <Typography variant="h6">Moscow</Typography>
                                <Typography>Tweets: 13523</Typography>
                            </Paper>
                            <Divider />
                            <Paper className={classes.whatsHappeningTweet}>
                                <Typography variant="h6">
                                    #Coronavirus
                                </Typography>
                                <Typography>Tweets: 33523</Typography>
                            </Paper>
                            <Divider />
                            <Paper className={classes.whatsHappeningTweet}>
                                <Typography variant="h6">#Kazakstan</Typography>
                                <Typography>Tweets: 523</Typography>
                            </Paper>
                        </Paper>

                        <Paper className={classes.whatsHappeningContainer}>
                            <Typography variant="h6">Who to follow</Typography>
                            <Divider />
                            <Paper className={classes.whoToFollow}>
                                <Avatar src="https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png" />
                                <div>
                                    <Typography variant="h6">
                                        Dock of shame
                                    </Typography>
                                    <Typography>@FavDockOfShame</Typography>
                                </div>
                                <IconButton>
                                    <PersonAddOutlinedIcon />
                                </IconButton>
                            </Paper>
                            <Divider />
                            <Paper className={classes.whoToFollow}>
                                <Avatar src="https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png" />
                                <div>
                                    <Typography variant="h6">
                                        Dock of shame
                                    </Typography>
                                    <Typography>@FavDockOfShame</Typography>
                                </div>
                                <IconButton>
                                    <PersonAddOutlinedIcon />
                                </IconButton>
                            </Paper>
                            <Divider />
                        </Paper>
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    );
};
