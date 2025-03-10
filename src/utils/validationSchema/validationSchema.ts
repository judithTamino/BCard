import { basicInfoSchema } from './signup/basicInfoSchema';
import { imageSchema } from './signup/imageSchema';
import { addressSchema } from './addressSchema';
import { accountTypePasswordSchema } from './signup/accountTypePasswordSchema';

export const validationSchema = [
  basicInfoSchema,
  imageSchema,
  addressSchema,
  accountTypePasswordSchema,
];
