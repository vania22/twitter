import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { Button, ButtonBase, Hidden, Typography } from '@material-ui/core';

import { useHomeStyles } from '../pages/Home/theme';

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
                    <Hidden mdDown>
                        <Typography variant="h6">Search</Typography>
                    </Hidden>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <NotificationsNoneOutlinedIcon />
                    <Hidden mdDown>
                        <Typography variant="h6">Notifications</Typography>
                    </Hidden>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <EmailOutlinedIcon />
                    <Hidden mdDown>
                        <Typography variant="h6">Messages</Typography>
                    </Hidden>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <BookmarkBorderOutlinedIcon />
                    <Hidden mdDown>
                        <Typography variant="h6">Saved</Typography>
                    </Hidden>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <ListAltOutlinedIcon />
                    <Hidden mdDown>
                        <Typography variant="h6">List</Typography>
                    </Hidden>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <PermIdentityOutlinedIcon />
                    <Hidden mdDown>
                        <Typography variant="h6">Profile</Typography>
                    </Hidden>
                </ButtonBase>
            </li>
            <li className={classes.sideMenuListItem}>
                <ButtonBase>
                    <MoreHorizOutlinedIcon />
                    <Hidden mdDown>
                        <Typography variant="h6">More</Typography>
                    </Hidden>
                </ButtonBase>
            </li>
            <li className={classes.createTweetSideMenuButton}>
                <Hidden lgUp>
                    <ButtonBase>
                        <CreateIcon />
                    </ButtonBase>
                </Hidden>

                <Hidden mdDown>
                    <Button variant="contained" fullWidth>
                        Tweet
                    </Button>
                </Hidden>
            </li>
        </ul>
    );
};
