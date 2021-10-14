import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };
  return (
    <div>
      <Dialog open={props.openDialog} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">SendNotification</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Title"
            type="email"
            fullWidth
          />
          <TextField
            
            margin="dense"
            id="message"
            label="message"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}