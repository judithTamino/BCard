import * as Yup from 'yup';

export const basicInfoSchema = Yup.object({
  first: Yup.string()
    .min(2, 'Name field should be more than 2 characters')
    .max(256, 'Name field should be less than 256 characters')
    .required('First name is required'),
  middle: Yup.string()
    .min(2, 'Name field should be more than 2 characters')
    .max(256, 'Name field should be less than 256 characters'),
  last: Yup.string()
    .min(2, 'Name should be more than 2 characters')
    .max(256, 'Name field should be less than 256 characters')
    .required('First name is required'),
  phone: Yup.string()
    .matches(
      /^(?:\+972|0)(?:[23489]\d{7}|5\d{8})$/,
      'Phone must be standard Israeli phone number'
    )
    .required('Phone number field is required'),
  email: Yup.string()
    .email()
    .min(5, 'Email field should be more than 5 characters')
    .required('Email is required'),
});
