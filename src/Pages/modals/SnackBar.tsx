import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import s from './Modals.module.css'

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const useStyles = makeStyles((theme: Theme) => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));

export const SnackBar = () => {
    // const classes = useStyles();
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [openMessage, setOpenMessage] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
        setOpenError(false);
        setOpenMessage(false);
    };

    return (
        <div >
            <div className={s.item}>
                <Button variant="outlined" color="primary" onClick={() => setOpenSuccess(true)}>
                    Show success modal
                </Button>
                <Snackbar open={openSuccess} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
                </Alert>
                </Snackbar>
            </div>
            <div className={s.item}>
                <Button variant="outlined" color="primary" onClick={() => setOpenError(true)}>
                    Show error modal
                </Button>
                <Snackbar open={openError} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        This is a error message!
                </Alert>
                </Snackbar>
            </div>
            <div className={s.item}>
                <Button variant="outlined" color="primary" onClick={() => setOpenMessage(true)}>
                    Show message modal
                </Button>
                <Snackbar open={openMessage} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info">
                        This is message!
                </Alert>
                </Snackbar>
            </div>

        </div>
    );
}