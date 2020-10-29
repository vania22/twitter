import React from 'react';

import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { ModalBlock } from '../components/ModalBlock';

export const useSignInStyles = makeStyles(() => ({
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
        width: '200%',
        height: '200%',
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
                fontWeight: 700,
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
    input: {
        '& input': {
            backgroundColor: '#192734',
        },
        '& label': {
            color: 'rgb(136, 153, 166)',
        },
        marginBottom: 45,
        borderBottom: '1px solid rgb(136, 153, 166)',
    },
}));

export const SignIn = (): React.ReactElement => {
    const classes = useSignInStyles();

    const [visibleModal, setVisibleModal] = React.useState<
        'signIn' | 'signUp'
    >();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

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
                        onClick={handleClickOpenSignUp}
                    >
                        Sign up
                    </Button>

                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={handleClickOpenSignIn}
                    >
                        Log in
                    </Button>
                    <ModalBlock
                        visible={visibleModal === 'signIn'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="Log in to Twitter"
                    >
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                    className={classes.input}
                                />
                                <TextField
                                    autoFocus
                                    id="password"
                                    label="Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                    className={classes.input}
                                />
                                <Button
                                    onClick={handleCloseModal}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ marginBottom: 40 }}
                                >
                                    Log in
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="Create your account"
                    >
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    autoFocus
                                    id="name"
                                    label="Name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                    className={classes.input}
                                />
                                <TextField
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                    className={classes.input}
                                />
                                <TextField
                                    autoFocus
                                    id="password"
                                    label="Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                    className={classes.input}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ marginBottom: 40 }}
                                >
                                    Next
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
};
