import React, { useState } from 'react';
import {
    Container,
    Grid,
    Hidden,
    IconButton,
    makeStyles,
    InputBase,
    Typography,
    withStyles,
    Paper,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SearchIcon from '@material-ui/icons/Search';

const useHomeStyles = makeStyles(() => ({
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
        cursor: 'pointer',
        '& h6': {
            fontWeight: 700,
            fontSize: 20,
            marginLeft: 15,
            '@media (max-width: 1280px)': {
                display: 'none',
            },
        },
        '& svg': {
            fontSize: 28,
            color: '#fff',
            '&:hover': {
                color: '#1DA1F2',
            },
        },
    },
    searchInputIcon: {
        position: 'absolute',
        top: 22,
        left: 15,
        zIndex: 1,
        color: '#8e8a8a',
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
        padding: '0 15px',
        height: 53,
        borderColor: 'rgba(103, 100, 100, 0.544)',
        '& h6': {
            fontWeight: 700,
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
                <Grid item xs={2} sm={2} md={1} lg={2}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton
                                color="primary"
                                className={classes.logoButton}
                            >
                                <TwitterIcon className={classes.logoSvg} />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <LocalOfferOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">Search</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <NotificationsNoneOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">Notifications</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <EmailOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">Messages</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <BookmarkBorderOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">Saved</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <ListAltOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">List</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <PermIdentityOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">Profile</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <MoreHorizOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">More</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={9} sm={9} md={8} lg={7}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper
                            variant="outlined"
                            className={classes.tweetsHeader}
                        >
                            <Typography variant="h6">Home</Typography>
                        </Paper>
                        <Paper
                            variant="outlined"
                            className={classes.tweetsHeader}
                        >
                            <Grid></Grid>
                        </Paper>
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
