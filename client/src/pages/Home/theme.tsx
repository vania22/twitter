import { makeStyles } from '@material-ui/core';

export const useHomeStyles = makeStyles((theme) => ({
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
        color: theme.palette.primary.main,
    },
    logoButton: {
        margin: '10px 0',
    },

    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.text.primary,
        margin: '5px 0',
        cursor: 'pointer',

        '& button': {
            padding: 10,
            borderRadius: 30,
            transition: 'background-color 0.2s ease-in-out',
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242, 0.1) ',
                color: theme.palette.primary.main,
                '& svg': {
                    color: theme.palette.primary.main,
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
        },
    },
    createTweetSideMenuButton: {
        color: theme.palette.text.primary,

        '& button:first-child': {
            padding: 10,
            borderRadius: 30,
            backgroundColor: theme.palette.primary.main,
            '& svg': {
                width: 30,
                height: 30,
            },
            '&:hover': {
                opacity: '0.9',
            },
        },
        '& button:last-child': {
            color: theme.palette.text.primary,
            marginTop: 20,
            fontSize: 17,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
                opacity: '0.9',
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
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.text.primary,
        borderColor: 'rgba(103, 100, 100, 0.544)',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.text.primary,
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
        color: theme.palette.text.secondary,
        '& b': {
            color: theme.palette.text.primary,
        },
    },
    tweetFooter: {
        display: 'flex',
        width: 450,
    },
    tweetIconContainer: {
        color: theme.palette.text.secondary,
        marginRight: '12.5%',
        '& svg': {
            color: theme.palette.text.secondary,
        },
        '&:hover': {
            color: theme.palette.primary.main,
            '& svg': {
                color: theme.palette.primary.main,
            },
        },
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 348,
        minWidth: 288,
    },
    whatsHappeningContainer: {
        marginTop: 15,
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.text.primary,
        borderRadius: 10,
        '& h6': {
            padding: '5px 15px',
        },
    },
    whatsHappeningTweet: {
        backgroundColor: theme.palette.primary.contrastText,
        padding: '5px 15px',
        borderRadius: 0,

        '& h6': {
            color: theme.palette.text.primary,
            padding: 0,
            fontSize: 15,
        },
        '& p': {
            color: theme.palette.text.secondary,
            fontSize: 13,
        },
        '&:last-of-type': {
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
        },
    },
    whoToFollow: {
        backgroundColor: theme.palette.primary.contrastText,
        display: 'flex',
        alignItems: 'center',
        padding: '5px 15px',
        '& div': {
            marginRight: 10,
        },
        '& h6': {
            color: theme.palette.text.primary,
            padding: 0,
            fontSize: 14,
        },
        '& p': {
            color: theme.palette.text.secondary,
            padding: 0,
            fontSize: 13,
        },
        '& button': {
            marginLeft: 20,
        },
        '& svg': {
            color: theme.palette.primary.main,
        },
        '&:last-of-type': {
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
        },
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 15,
        paddingBottom: 5,

        '& textarea': {
            width: '100%',
            marginLeft: 10,
            minHeight: 50,
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.text.primary,
            border: 0,
            borderBottom: '1px solid rgba(103, 100, 100, 0.544)',
            fontSize: 18,
            outline: 'none',
            fontFamily: 'system-ui',
            resize: 'none',

            '&:focus': {
                borderBottom: `1px solid ${theme.palette.primary.main}`,
            },
        },
    },
    formHeader: {
        display: 'flex',
    },
    formFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 10%',

        '& div': {
            display: 'flex',
            alignItems: 'center',
        },
        '& div:last-of-type': {
            '& button': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.primary,
                '&:hover': {
                    opacity: '0.9',
                },
                '&:disabled': {
                    opacity: '0.5',
                },
            },
        },
    },
    textLengthNumber: {
        color: theme.palette.text.primary,
        fontFamily: 'system-ui',
        fontSize: 13,
    },
    formCircularProgress: {
        position: 'relative',
        display: 'block',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
            display: 'block',
            'z-index': 2,
        },
    },
}));
