import React, { useState } from 'react';
// MUI
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogActions,
    TextField,
    InputAdornment,
    Button
} from '@mui/material';
// MUI Icons
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ErrorIcon from '@mui/icons-material/Error';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


// -----------------------------------------------------------------------------
const SendUsYourCV = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [submittingDialog, setSubmittingDialog] = useState(false);
    const [successDialog, setSuccessDialog] = useState(false);
    const [emailAddress, setEmailAddress] = useState('');
    const [information, setInformation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleSubmit = () => {
        if (emailAddress === '' || information === '') {
            setErrorMessage('Please fill in all fields');
            return;
        }

        setOpenDialog(false); // Close the first dialog
        setSubmittingDialog(true); // Open the submitting dialog

        setTimeout(() => {
            setSubmittingDialog(false); // Close the submitting dialog after 2 seconds
            setSuccessDialog(true);

            setTimeout(() => {
                setSuccessDialog(false); // Close the success dialog after 2 seconds
            }, 2000);
        }, 1000);
        setEmailAddress('');
        setInformation('');
        setErrorMessage('');
    };

    return (
        <>
            <Button onClick={handleClickOpen} variant='contained'>
                Apply Now
            </Button>
            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle color='primary'>Send us your CV!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below or simply send a link to your resume.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        label='Email Address'
                        type='email'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AlternateEmailIcon color='primary' />
                                </InputAdornment>
                            )
                        }}
                        variant='outlined'
                        fullWidth
                        sx={{ mt: 6 }}
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        label='Information'
                        type='text'
                        fullWidth
                        sx={{
                            marginTop: 4
                        }}
                        minRows={4}
                        maxRows={10}
                        multiline
                        value={information}
                        onChange={(e) => setInformation(e.target.value)}
                    />
                    <DialogContentText
                        sx={{
                            pt: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            color: '#666666'
                        }}
                    >
                        <QuestionAnswerIcon fontSize='small' />
                        You need to wait 2-3 days.
                    </DialogContentText>
                    {errorMessage && (
                        <DialogContentText
                            sx={{
                                pt: 2,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                color: 'red'
                            }}
                        >
                            <ErrorIcon fontSize='small' />
                            {errorMessage}
                        </DialogContentText>
                    )}
                    <DialogActions>
                        <Button
                            variant='text'
                            sx={{
                                border: '1px solid #000'
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <Dialog open={submittingDialog} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>Submitting...</DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={successDialog} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            fontSize: '20px',
                            color: 'green'
                        }}
                    >
                        <ThumbUpAltTwoToneIcon />
                        CV submitted!
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SendUsYourCV