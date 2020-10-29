import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TwitterIcon from '@material-ui/icons/Twitter';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useSignInStyles } from '../pages/SignIn';

interface ModalBlockProps {
    title?: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useSignInStyles>;
    visible?: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
    title,
    onClose,
    visible = false,
    children,
    style: styleProps,
}: ModalBlockProps): React.ReactElement | null => {
    if (!visible) {
        return null;
    }

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            PaperProps={{
                style: {
                    backgroundColor: '#15202B',
                    color: '#fff',
                    ...styleProps,
                },
            }}
        >
            <TwitterIcon
                style={{
                    color: '#fff',
                    margin: '10px auto',
                    width: 24,
                    height: 24,
                }}
            />
            <DialogTitle
                id="form-dialog-title"
                style={{ border: 'none', fontSize: 26, padding: '0 24px' }}
            >
                {title}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};
