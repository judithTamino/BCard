import * as Yup from 'yup';
import { addressSchema } from './addressSchema';

export const cardSchema = [
  Yup.object({
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
  }),
  Yup.object({
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
  }),
  Yup.object({
    image_url: Yup.string()
      .min(14, 'image url field should be more than 14 characters')
      .matches(
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|tiff|ico))(\?.*)?$/i,
        'web must be a standard URL with an image format (.png/.jpg/.gif/ext...)'
      ),
    // .required('image url is required'),
    image_alt: Yup.string()
      .min(2, 'image description field should be more than 2 characters')
      .max(256, 'image description field should be less than 256 characters'),
    // .required('image description is required'),
  }),
  addressSchema,
];
