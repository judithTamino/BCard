import * as Yup from 'yup';
import { addressSchema } from '../schemas/addressSchema';

export const userSchema = [
  Yup.object({
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
  }),
  Yup.object({
    image_url: Yup.string().min(
      14,
      'Image url field should be more than 14 characters'
    ),
    image_alt: Yup.string()
      .min(2, 'Image description field should be more than 2 characters')
      .max(256, 'Image description field should be less than 256 characters'),
  }),
  addressSchema,
  Yup.object({
    password: Yup.string()
      .min(7, 'Password field should be more than 7 characters')
      .max(20, 'Password field should be less than 20 characters')
      .required('Password is required')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-"])[A-Za-z\d!@#$%^&*\-"]{7,}$/,
        'Password field must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*-"), and be at least 7 characters long'
      ),
  }),
];
