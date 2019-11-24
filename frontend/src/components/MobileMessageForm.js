import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
    const [state, setState] = React.useState({
        open: props.open,
        value: ""
    });

    const handleChange = event => {
        setState({value: event.target.value})
        console.log("change")
    }

    const sendMessage = () => {

    }

    return (
        <div>

            <Dialog open={state.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Send Message</DialogTitle>
                <DialogContent>
                    <DialogContentText>vo
                        Write here the text message you wish to send. Don't forget to be polite!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="msg"
                        label="Message"
                        placeholder="Write your message here"
                        multiline="true"
                        rows="4"
                        maxLength="220"
                        fullWidth
                        value={state.value}
                        
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setState({open: false})} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={sendMessage} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
