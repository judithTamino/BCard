import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Components
import TextInput from '../../TextInput/TextInput';
// Interface
import { ISignup } from '../../../interfaces/forms/ISignup';

interface BasicInfoProps {
  next: (newData: ISignup) => void;
  data: ISignup;
  schema: any;
}

const BasicInfo: FunctionComponent<BasicInfoProps> = ({ next, data, schema }) => {
  const handleSubmit = (values: ISignup) => {
    next(values);
  };
  return (
    <div className='form-container'>
      <h3 className='form-title'>Basic Info</h3>

      <Formik initialValues={data} validationSchema={schema} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className='form-data'>
              <div className='fullname-container grid'>
                <TextInput label='First Name' name='first' type='text' />

                <TextInput label='Middle Name' name='middle' type='text' />

                <TextInput label='Last Name' name='last' type='text' />
              </div>

              <TextInput label='Phone' name='phone' type='text' />

              <TextInput label='Email' name='email' type='text' />
            </div>

            <div className='form-btns-container'>
              <button className='btn btn-next' type='submit'>
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicInfo;
