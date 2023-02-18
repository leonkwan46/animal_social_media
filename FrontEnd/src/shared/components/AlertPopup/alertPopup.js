import { useState } from "react";
import { Box, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button } from "@mui/material";

// This component is useful for making sure that an action a user takes is a desired action.
// It double-checks whether that action is what they are intended to do.
function AlertPopup({
  initialButtonText,
  title,
  description,
  buttonLeftText,
  handleLeftAction = null,
  handleRightAction = null,
  handleClose = null
}) {
  const [openPopup, setOpenPopup] = useState(false);

  const handleCloseFromParent = () => {
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <Box>
      <Button
        size="small"
        variant="outlined"
        onClick={() => {
          setOpenPopup(true);
        }}
      >
        {initialButtonText}
      </Button>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
          handleCloseFromParent();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
          <DialogActions>
            <Button
              onClick={() => {
                if (handleLeftAction) {
                  handleLeftAction();
                }
                setOpenPopup(false);
                handleCloseFromParent();
              }}
            >
              {buttonLeftText}
            </Button>
            <Button
              onClick={() => {
                if (handleRightAction) {
                  handleRightAction();
                }
                setOpenPopup(false);
                handleCloseFromParent();
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default AlertPopup;
