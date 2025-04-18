import '../../css/btn.css';
import './Forms.css';

import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
// Components
import TextInput from '../TextInput/TextInput';
// Interface
import { ISignup } from '../../interfaces/forms/ISignup';

interface FormImageProps {
  data: ISignup;
  next: (newData: ISignup) => void;
  prev: (newData:ISignup) => void;
  schema: any;
}

const FormImage: FunctionComponent<FormImageProps> = ({
  data,
  next,
  prev,
  schema,
}) => {
  const handleSubmit = (values: ISignup) => {
    next(values);
  };

  return (
    <div className='form-container'>
      <h3 className='form-title'>Upload Image</h3>

      <Formik
        initialValues={data}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className='form-data'>
              <div className='input-group'>
                <TextInput
                  label='Url'
                  name='image-url'
                  type='text'
                  required={false}
                />
              </div>

              <div className='input-group'>
                <TextInput
                  label='Description'
                  name='image-alt'
                  type='text'
                  required={false}
                />
              </div>
            </div>

            <div className='form-btns-container grid'>
              <button
                className='btn btn-back'
                type='button'
                onClick={() => prev(values)}
              >
                Back
              </button>
              <button className='btn' type='submit'>
                next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormImage;
