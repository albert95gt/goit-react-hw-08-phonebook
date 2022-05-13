import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

import React from 'react';

export default function ButtonWrapper({ children, ...otherProps }) {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const buttonConfig = {
    variant: 'contained',
    color: 'secondary',
    onClick: handleSubmit,
    ...otherProps,
  };

  return <Button {...buttonConfig}>{children}</Button>;
}
