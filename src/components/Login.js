import React, { Component } from 'react'
import { Modal, Typography, Stack, Button } from '@mui/material';

class Login extends Component {
  render() {
    return (
      <Modal
        className="modal"
        open={this.props.open}
        onClose={this.props.handleClose}>
        <Stack
          id="modal-contents"
          sx={{ height: '70vh', width: '55vh' }}>
          <Typography>hi</Typography>
          <Button
            className="modal-button"
            onClick={this.props.handleClose}
            sx={{ margin: '8px', color: 'white', backgroundColor: '#ff007f' }}>
            Close
          </Button>
        </Stack>
      </Modal>
    );
  }
}

export default Login;
