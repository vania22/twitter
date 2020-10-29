import React from 'react';

import { InputBase, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useHomeStyles } from '../pages/Home/theme';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SearchTextField: React.FC<AddTweetFormProps> = ({
    classes,
}): React.ReactElement => {
    const [iconColor, setIconColor] = React.useState<string>('#8e8a8a');

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

    return (
        <div style={{ position: 'relative' }}>
            <SearchInput
                fullWidth
                placeholder="Search Twitter"
                onFocus={() => setIconColor('#1DA1F2')}
                onBlur={() => setIconColor('#8e8a8a')}
            />
            <SearchIcon
                className={classes.searchInputIcon}
                style={{
                    color: iconColor,
                }}
            />
        </div>
    );
};

export default SearchTextField;
