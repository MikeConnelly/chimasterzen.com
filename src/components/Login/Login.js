import React from 'react';
import { Modal, Typography, Stack, Button, FormControl, InputLabel, Input } from '@mui/material';

export default function Login(props) {
  return (
    <Modal className="modal" open={props.open} onClose={props.handleClose}>
      <Stack className="modal-contents" sx={{ color: 'white', bgcolor: 'background.default', padding: 8 }}>
        <Typography variant="h2">Login</Typography>
        <FormControl
          className="login-formcontrol"
          sx={{
            my: '6px',
            '& .MuiInputLabel-formControl': {
              color: 'white',
            },
          }}
        >
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <Input id="email-input" />
        </FormControl>
        <FormControl
          className="login-formcontrol"
          sx={{
            my: '6px',
            '& .MuiInputLabel-formControl': {
              color: 'white',
            },
          }}
        >
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input id="password-input" />
        </FormControl>
        <Button color="primary" onClick={props.handleLogin} sx={{ margin: '8px' }}>
          Login
        </Button>
        <Button color="primary" onClick={props.handleCreateAccount} sx={{ margin: '8px' }}>
          Create Account
        </Button>
      </Stack>
    </Modal>
  );
}
