import { Button, Dialog, DialogTitle } from '@mui/material';
import { React, useState } from 'react';
import PropTypes from 'prop-types';

function FormDialog(props) {
  const [message, setMessage] = useState('');
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleActions = (value) => {
      if(value === 'submit') {
        setMessage('Thank you for contacting us. We will get back to you shortly.');
        setTimeout(() => {
          onClose(value);
        }, 2000); // 2000 milliseconds delay
      } else {
        onClose(value);
      }
    };

    return (
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>How can we help?</DialogTitle>
        <div>{message}</div>
                <form>
  <input id='name' placeholder='Name' className='hero-input name' label='Name'  type='text'></input>
  <input id='email' placeholder='jane@doe.jde' className='hero-input email' label='Email' type='email'></input>
  <textarea id='message' placeholder='Message...' className='message' label='Message' rows="5"></textarea>
  <Button className='hero-button' variant='outlined' onClick={handleActions}>Get Quote</Button>
</form>
      </Dialog>
    )
}

FormDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default FormDialog;