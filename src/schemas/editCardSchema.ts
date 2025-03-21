import * as Yup from 'yup';

export const editCardSchema = Yup.object({
  title: Yup.string()
    .min(2, 'title field should be more than 2 characters.')
    .max(256, 'title field should be less than 256 characters')
    .required('title is required'),
  subtitle: Yup.string()
    .min(2, 'subtitle field should be more than 2 characters.')
    .max(256, 'subtitle field should be less than 256 characters')
    .required('subtitle is required'),
  description: Yup.string()
    .min(2, 'description field should be more than 2 characters.')
    .max(1024, 'description field should be less than 1024 characters')
    .required('description is required'),
  phone: Yup.string()
    .matches(
      /^(?:\+972|0)(?:[23489]\d{7}|5\d{8})$/,
      'phone must be standard Israeli phone number'
    )
    .required('phone number field is required'),
  email: Yup.string()
    .email()
    .min(5, 'email field should be more than 5 characters')
    .required('email is required'),
  web: Yup.string()
    .min(14, 'web field should be more than 14 characters')
    .matches(
      /^(https?:\/\/)?(www\.)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w-./?%&=]*)?$/,
      'web must be a standard URL'
    ),
  image_url: Yup.string()
    .min(14, 'image url field should be more than 14 characters')
    .matches(
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|tiff|ico))(\?.*)?$/i,
      'web must be a standard URL with an image format (.png/.jpg/.gif/ext...)'
    )
    .required('image url is required'),
  image_alt: Yup.string()
    .min(2, 'image description field should be more than 2 characters')
    .max(256, 'image description field should be less than 256 characters')
    .required('image description is required'),
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
