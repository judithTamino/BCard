import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
// CSS
import './Forms.css';
// Components
import TextInput from '../TextInput/TextInput';
// Interface
import { ISignup } from '../../interfaces/forms/ISignup';

interface FormAddressProps {
  next: (newData: ISignup) => void;
  prev: (newData: ISignup) => void;
  data: ISignup;
  schema: any;
}

const FormAddress: FunctionComponent<FormAddressProps> = ({
  next,
  prev,
  data,
  schema,
}) => {
  const handleSubmit = (values: ISignup) => {
    next(values);
  };
  return (
    <div className='form-container'>
      <h3 className='form-title'>Address</h3>

      <Formik
        initialValues={data}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className='form-data'>
              <div className='address-container grid'>
                <div className='input-group'>
                  <TextInput
                    label='Street'
                    name='street'
                    type='text'
                    required={true}
                  />
                </div>

                <div className='input-group'>
                  <TextInput
                    label='House Number'
                    name='house_number'
                    type='number'
                    required={true}
                  />
                </div>
              </div>

              <div className='input-group'>
                <TextInput
                  label='City'
                  name='city'
                  type='text'
                  required={true}
                />
              </div>

              <div className='input-group'>
                <TextInput
                  label='Country'
                  name='country'
                  type='text'
                  required={true}
                />
              </div>

              <div className='address-container grid'>
                <div className='input-group'>
                  <TextInput
                    label='State'
                    name='state'
                    type='text'
                    required={false}
                  />
                </div>

                <div className='input-group'>
                  <TextInput
                    label='Zip'
                    name='zip'
                    type='number'
                    required={true}
                  />
                </div>
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

export default FormAddress;
