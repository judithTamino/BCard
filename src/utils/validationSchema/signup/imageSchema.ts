import * as Yup from 'yup';

export const imageSchema = Yup.object({
  image_url: Yup.string().min(
    14,
    'Image url field should be more than 14 characters'
  ),
  image_alt: Yup.string()
    .min(2, 'Image description field should be more than 2 characters')
    .max(256, 'Image description field should be less than 256 characters'),
});
