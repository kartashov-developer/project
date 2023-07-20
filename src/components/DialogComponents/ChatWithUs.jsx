import React, { useState, useEffect } from 'react'

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  TextField,
  Link,
  InputAdornment,
  Button
} from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';

const ChatWithUs = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [submittingDialog, setSubmittingDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
    setOpenDialog(false); // Close the first dialog
    setSubmittingDialog(true); // Open the submitting dialog

    setTimeout(() => {
      setSubmittingDialog(false); // Close the submitting dialog after 2 seconds
      setSuccessDialog(true);

      setTimeout(() => {
        setSuccessDialog(false); // Close the success dialog after 2 seconds
      }, 2000);
    }, 1000);
  };

  // const ButtonClose = () => {
  //   const [open, setOpen] = useState(true);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setOpen(false);
  //     }, 2000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, []);

  //   return (
  //     <Dialog open={open} onClose={handleMessageDialogClose}>
  //       <DialogContent>
  //         <DialogContentText>We submitted your message!</DialogContentText>
  //       </DialogContent>
  //     </Dialog>
  //   );
  // };

  return (
    <>
      <Link onClick={handleClickOpen}>Chat with us</Link>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle color='primary'>Chat with us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To chat with us, please fill in the form below and we will answer you.
          </DialogContentText>
          <TextField
            autoFocus
            label="Email Adress"
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon color="primary" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            fullWidth
            sx={{ mt: 6 }}
          />
          <TextField
            autoFocus
            label="Information"
            type="text"
            fullWidth
            sx={{
              marginTop: 4
            }}
            minRows={4}
            maxRows={10}
            multiline
          />
          <DialogContentText
            sx={{
              pt: 1.5
            }}
          >
            *You need to wait 2-3 days.
          </DialogContentText>
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
      </Dialog >
      <Dialog open={successDialog} onClose={handleClose}>
        <DialogContent>
          <DialogContentText sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            fontSize: '20px',
            color: 'green'
          }}>
            <ThumbUpAltTwoToneIcon />
            All is good!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChatWithUs
