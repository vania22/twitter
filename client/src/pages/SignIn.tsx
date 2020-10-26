import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        position: 'relative',
        backgroundColor: '#71C9F8',
        overflow: 'hidden',
    },
    blueSideBackgroundIcon: {
        position: 'absolute',
        left: '50%',
        top: '55%',
        transform: 'translate(-50%, -50%)',
        color: '#1DA1F2',
        width: '350%',
        height: '350%',
    },
    blueSideList: {
        listStyle: 'none',
        color: '#fff',
        padding: 0,
        margin: 0,
        position: 'relative',
        '& li': {
            display: 'flex',
            marginBottom: 45,
            '& h5': {
                fontSize: 19,
                fontWeight: 600,
            },
            '& svg': {
                width: 33,
                height: 33,
                marginRight: 15,
            },
        },
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        backgroundColor: '#15202B',
    },
    loginSideTwitterIcon: {
        fontSize: 50,
        color: '#fff',
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
        color: '#fff',
    },
}));

const SignIn = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBackgroundIcon} />
                <ul className={classes.blueSideList}>
                    <li>
                        <SearchIcon />
                        <Typography variant="h5">
                            Follow your interests.
                        </Typography>
                    </li>
                    <li>
                        <PeopleOutlineIcon />
                        <Typography variant="h5">
                            Hear what people are talking about.
                        </Typography>
                    </li>
                    <li>
                        <ChatBubbleOutlineIcon />
                        <Typography variant="h5">
                            Join the conversation.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant="h4">
                        See what’s happening in the world right now
                    </Typography>
                    <Typography>
                        <b style={{ color: 'white' }}>Join Twitter today.</b>
                    </Typography>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginBottom: 15 }}
                    >
                        Sign up
                    </Button>

                    <Button variant="outlined" color="primary" fullWidth>
                        Log in
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
