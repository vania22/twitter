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

import { useHomeStyles } from '../pages/Home/theme';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
    classes,
}): React.ReactElement => {
    const TEXTAREA_LIMIT = 280;

    const [text, setText] = React.useState<string>('');

    const textLengthPercentage: number = Math.floor(
        (text.length / TEXTAREA_LIMIT) * 100,
    );

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };

    const handleSubmit = (): void => {
        setText('');
    };

    return (
        <div className={classes.formContainer}>
            <div className={classes.formHeader}>
                <Avatar
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
                />
                <TextareaAutosize
                    placeholder="What's happening?"
                    onChange={handleChangeTextarea}
                    value={text}
                />
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
                    {text && (
                        <>
                            <span
                                className={classes.textLengthNumber}
                                style={
                                    text.length > TEXTAREA_LIMIT
                                        ? { color: 'rgb(224,36, 94)' }
                                        : undefined
                                }
                            >
                                {text.length <= TEXTAREA_LIMIT
                                    ? text.length
                                    : `-${text.length - TEXTAREA_LIMIT}`}
                            </span>
                            <div className={classes.formCircularProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={
                                        textLengthPercentage > 100
                                            ? 100
                                            : textLengthPercentage
                                    }
                                    style={
                                        textLengthPercentage >= 100
                                            ? { color: 'rgb(224, 36, 94)' }
                                            : undefined
                                    }
                                />
                                <CircularProgress
                                    style={{
                                        color: 'rgba(255, 240, 240, 0.163)',
                                    }}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}

                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={textLengthPercentage >= 100}
                    >
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    );
};
