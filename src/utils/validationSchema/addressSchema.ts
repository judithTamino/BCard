import * as Yup from 'yup';

export const addressSchema = Yup.object({
  state: Yup.string()
    .min(2, 'State field should be more than 2 characters')
    .max(256, 'State field should be less than 256 characters'),
  country: Yup.string()
    .min(2, 'Country field should be more than 2 characters')
    .max(256, 'Country field should be less than 256 characters')
    .required('Country is required'),
  city: Yup.string()
    .min(2, 'City field should be more than 2 characters')
    .max(256, 'City field should be less than 256 characters')
    .required('City is required'),
  street: Yup.string()
    .min(2, 'Street field should be more than 2 characters')
    .max(256, 'Street field should be less than 256 characters')
    .required('Street is required'),
  house_number: Yup.string()
    .matches(/^[0-9]+$/, 'House number must be only digits')
    .min(2, 'House number field should be more than 2 characters')
    .max(256, 'House number field should be less than 256 characters')
    .required('House number is required'),
  zip: Yup.string()
    .matches(/^[0-9]+$/, 'Zip must be only digits')
    .min(2, 'Zip field should be more than 2 characters')
    .max(256, 'Zip field should be less than 256 characters')
    .required('Zip is required'),
});
