import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: 'lightgreen',
  color: 'white',
  textTransform: 'none',
  borderRadius: '9999px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: 'lightgreen',
  },
});

const CustomButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default CustomButton;