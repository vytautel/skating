import React, { useState, useEffect } from 'react';
import ButtonUI from '@material-ui/core/Button';
import DialogUI from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
/* import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText'; */
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import '../../styles/game.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog(props) {
  const { isDialogOpen, newShuffle } = props;
  const [isOpen, setOpen] = useState(!!isDialogOpen);
  const [showing, setShowing] = useState('hide');

  const handleClose = () => {
    setOpen(false);
    setShowing('show');
  };

  useEffect(() => {
    setOpen(isDialogOpen);
  }, [isDialogOpen]);

  return (
    <div>
      <div className="center centerFlex">
        <ButtonUI
          className={showing}
          variant="outlined"
          color="primary"
          onClick={() => {
            newShuffle();
          }}
        >
          <FormattedMessage {...messages.continue} />
        </ButtonUI>
      </div>
      <DialogUI
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <FormattedMessage {...messages.correct} />
        </DialogTitle>
        {/*  <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <ButtonUI
            onClick={() => {
              handleClose();
              newShuffle();
            }}
            color="primary"
          >
            <FormattedMessage {...messages.continue} />
          </ButtonUI>
        </DialogActions>
      </DialogUI>
    </div>
  );
}

Dialog.propTypes = {
  newShuffle: PropTypes.func,
  isDialogOpen: PropTypes.bool,
};
