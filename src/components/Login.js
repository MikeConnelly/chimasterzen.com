import React, { Component } from 'react'
import { Modal, Typography, Stack, Button, FormControl, InputLabel, Input } from '@mui/material';

class Login extends Component {
  render() {
    return (
      <Modal
        className="modal"
        open={this.props.open}
        onClose={this.props.handleClose}>
        <Stack
          className="modal-contents"
          sx={{ height: '70%', width: '30%', color: 'white', bgcolor: 'background.default' }}>
          <Typography variant="h2">Login</Typography>
          <FormControl
            className="login-formcontrol" 
            sx={{
              my: '6px',
              '& .MuiInputLabel-formControl': {
                color: 'white',
              }
            }}>
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <Input id="email-input" />
          </FormControl>
          <FormControl
            className="login-formcontrol"
            sx={{
              my: '6px',
              '& .MuiInputLabel-formControl': {
                color: 'white',
              }
            }}>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input id="password-input" />
          </FormControl>
          <Button
            color="primary"
            onClick={this.props.handleClose}
            sx={{ margin: '8px' }}>
            Login
          </Button>
          <Button
            color="primary"
            onClick={this.props.handleClose}
            sx={{ margin: '8px' }}>
            Create Account
          </Button>
        </Stack>
      </Modal>
    );
  }
}

export default Login;
