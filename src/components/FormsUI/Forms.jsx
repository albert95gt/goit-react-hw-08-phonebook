import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

export default function Forms({ name, ...otherProps }) {
  const [field, mata] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }
  return <TextField {...configTextField} />;
}
