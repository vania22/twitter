import React from 'react';

import {
    Avatar,
    IconButton,
    TextareaAutosize,
    Button,
    CircularProgress,
} from '@material-ui/core';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { useHomeStyles } from '../pages/Home';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
    classes,
}): React.ReactElement => {
    return (
        <div className={classes.formContainer}>
            <div className={classes.formHeader}>
                <Avatar
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
                />
                <TextareaAutosize placeholder="What's happening?" />
            </div>
            <div className={classes.formFooter}>
                <div>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color="primary">
                        <EmojiEmotionsOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                </div>
                <div>
                    <div className={classes.formCircularProgress}>
                        <CircularProgress
                            variant="static"
                            size={20}
                            thickness={4}
                            value={18}
                        />
                        <CircularProgress
                            style={{ color: 'rgba(255, 240, 240, 0.163)' }}
                            variant="static"
                            size={20}
                            thickness={4}
                            value={100}
                        />
                    </div>
                    <Button color="primary" variant="contained">
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    );
};
