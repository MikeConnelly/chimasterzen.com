import React, { Component } from 'react'
import { Modal, Typography, Stack } from '@mui/material';

class Login extends Component {
  render() {
    return (
      <Modal
        className="modal"
        open={this.props.open}>
        <Stack
          id="modal-contents"
          sx={{ height: '70vh', width: '55vh' }}>
          <Typography>hi</Typography>
        </Stack>
      </Modal>
    );
  }
}

export default Login;
