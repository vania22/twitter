import { makeStyles } from '@material-ui/core';

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
