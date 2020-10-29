import React from 'react';

import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { useSignInStyles } from './theme';
import { ModalBlock } from '../../components/ModalBlock';

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
