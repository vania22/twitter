import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { ButtonBase, IconButton, Typography } from '@material-ui/core';

import { useHomeStyles } from '../pages/Home';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
    classes,
}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <ButtonBase color="primary" className={classes.logoButton}>
                    <TwitterIcon className={classes.logoSvg} />
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <LocalOfferOutlinedIcon />
                    <Typography variant="h6">Search</Typography>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <NotificationsNoneOutlinedIcon />
                    <Typography variant="h6">Notifications</Typography>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <EmailOutlinedIcon />
                    <Typography variant="h6">Messages</Typography>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <BookmarkBorderOutlinedIcon />
                    <Typography variant="h6">Saved</Typography>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <ListAltOutlinedIcon />
                    <Typography variant="h6">List</Typography>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <PermIdentityOutlinedIcon />
                    <Typography variant="h6">Profile</Typography>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <MoreHorizOutlinedIcon />
                    <Typography variant="h6">More</Typography>
                </ButtonBase>
            </li>
        </ul>
    );
};
