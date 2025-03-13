import * as Yup from 'yup';

export const loginShema = Yup.object({
  email: Yup.string()
    .email()
    .min(5, 'Email field should be more than 5 characters')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password field should be more than 7 characters')
    .max(20, 'Password field should be less than 20 characters')
    .required('Password is required')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-"])[A-Za-z\d!@#$%^&*\-"]{7,}$/,
      'Password field must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*-"), and be at least 7 characters long'
    ),
});
