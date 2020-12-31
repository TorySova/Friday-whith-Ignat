import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const QuestionModals = () => {
    const [open, setOpen] = React.useState(false);
    const [answer, setAnswer] = React.useState(false);


    const setTrue = () => {
        setAnswer(true)
        setOpen(false);
    }
    const setFalse  = () => {
        setAnswer(false)
        setOpen(false);
    }

    return (
        <div>
            
            <Button variant="outlined" color="primary" onClick={()=>setOpen(true)}>
                Show  Question modal
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>setOpen(true)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Question modal
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={setTrue } color="primary">
                        Yes
                    </Button>
                    <Button onClick={setFalse} color="primary">
                        No
                    </Button>
                </DialogActions>
            </Dialog>
            {answer ? <span>Yes</span> : <span>No</span>}
        </div>
    );
}
