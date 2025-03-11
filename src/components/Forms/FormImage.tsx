import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';

// Components
import TextInput from '../TextInput/TextInput';
// Interface
import { ISignup } from '../../interfaces/forms/ISignup';

interface FormImageProps {
  data:ISignup;
  next: (newData:ISignup, final:boolean) => void;
  prev: (newData:ISignup) => void;
}

const FormImage: FunctionComponent<FormImageProps> = ({data, next, prev}) => {
  const handleSubmit = (values: ISignup) => {
    next(values, true);
  };

  return (
      <div className='form-container'>
        <h3 className='form-title'>Upload Image</h3>

        <Formik initialValues={data} onSubmit={handleSubmit}>
          {({values}) => (
            <Form className='form'>
              <div className='form-data'>
                <TextInput label='Url' name='image-url' type='text' />

                <TextInput label='Description' name='image-alt' type='text' />
              </div>

              <div className='form-btns-container'>
                <button className='btn btn-next' type='button' onClick={() => prev(values)}>
                  Back
                </button>
                <button className='btn btn-signup' type='submit'>
                  Signup
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
  );
};

export default FormImage;
