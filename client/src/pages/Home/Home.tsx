import React, { useState } from 'react';

import {
    Container,
    Grid,
    Hidden,
    InputBase,
    Typography,
    withStyles,
    Paper,
    Divider,
    Avatar,
    IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import { useHomeStyles } from './theme';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';

const SearchInput = withStyles({
    input: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#253341',
        marginTop: 10,
        height: 45,
        padding: 0,
        paddingLeft: 50,
        borderRadius: 30,
        color: '#fff',
        '&:focus': {
            border: '1px solid #1DA1F2',
            borderShadow: 'none',
        },
    },
})(InputBase);

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    interface SearchIconColor {
        searchIconColor: '#1DA1F2' | '#8e8a8a';
    }
    const [searchIconColor, setSearchIconColor] = useState<SearchIconColor>({
        searchIconColor: '#8e8a8a',
    });

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
                        <Tweet
                            user={{
                                fullname: 'React Newsletter',
                                username: 'reactnewsletter',
                                avatarUrl:
                                    'https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png',
                            }}
                            text="Official account for 2020 Challenge Cup winners + eight times Mens Super League Champions & Womens Challenge Cup  Super League Double winners Leeds Rhinos"
                            time="1h"
                            classes={classes}
                        />
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
                        <div style={{ position: 'relative' }}>
                            <SearchInput
                                fullWidth
                                placeholder="Search Twitter"
                                onFocus={() =>
                                    setSearchIconColor({
                                        searchIconColor: '#1DA1F2',
                                    })
                                }
                                onBlur={() =>
                                    setSearchIconColor({
                                        searchIconColor: '#8e8a8a',
                                    })
                                }
                            />
                            <SearchIcon
                                className={classes.searchInputIcon}
                                style={{
                                    color: searchIconColor.searchIconColor,
                                }}
                            />
                        </div>
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