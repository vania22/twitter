import React, { useState } from 'react';

import {
    Container,
    Grid,
    Hidden,
    makeStyles,
    InputBase,
    Typography,
    withStyles,
    Paper,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

export const useHomeStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh',
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    logoSvg: {
        fontSize: '36px !important',
        color: '#1DA1F2 !important',
    },
    logoButton: {
        margin: '10px 0',
    },

    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        margin: '5px 0',
        cursor: 'pointer',

        '& button': {
            padding: 10,
            borderRadius: 30,
            transition: 'background-color 0.2s ease-in-out',
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242, 0.1) ',
                color: '#1DA1F2',
                '& svg': {
                    color: '#1DA1F2',
                },
            },
        },
        '& svg': {
            width: 30,
            height: 30,
        },
        '& h6': {
            fontWeight: 700,
            fontSize: 20,
            marginLeft: 15,
            '@media (max-width: 1280px)': {
                display: 'none',
            },
        },
    },
    searchInputIcon: {
        position: 'absolute',
        top: 22,
        left: 15,
        zIndex: 1,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
        backgroundColor: '#15202b',
        color: '#fff',
        borderColor: 'rgba(103, 100, 100, 0.544)',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        backgroundColor: '#15202b',
        color: '#fff',
        padding: '10px 15px',
        minHeight: 53,
        borderColor: 'rgba(103, 100, 100, 0.544)',
        '& h6': {
            fontWeight: 700,
        },
    },
    tweet: {
        '&:hover': {
            backgroundColor: 'rgba(30, 45, 61, 0.639)',
        },
    },
    tweetsUserInfo: {
        color: '#8e8a8a',
        '& b': {
            color: '#fff',
        },
    },
    tweetFooter: {
        display: 'flex',
        width: 450,
    },
    tweetIconContainer: {
        color: '#8e8a8a',
        marginRight: '12.5%',
        '& svg': {
            color: '#8e8a8a',
        },
        '&:hover': {
            color: '#1DA1F2',
            '& svg': {
                color: '#1DA1F2',
            },
        },
    },
    rightSide: {
        '@media (max-width: 1010px)': {
            display: 'none',
        },
    },
}));

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
                <Grid item xs={9} sm={10} md={8} lg={7}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper
                            variant="outlined"
                            className={classes.tweetsHeader}
                        >
                            <Typography variant="h6">Home</Typography>
                        </Paper>
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
                    <Grid item md={3} lg={3} className={classes.rightSide}>
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
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    );
};
