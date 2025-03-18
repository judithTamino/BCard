import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
// CSS
import '../../components/Forms/Forms.css';
import '../../css/btn.css';
// Components
import TextInput from '../../components/TextInput/TextInput';
// Interface
import { ISignup } from '../../interfaces/forms/ISignup';
import CheckboxInput from '../../components/CheckboxInput/CheckboxInput';

interface AccountTypePasswordProps {
  next: (newData: ISignup, finish:boolean) => void;
  prev: (newData: ISignup) => void;
  data: ISignup;
  schema: any;
}

const AccountTypePassword: FunctionComponent<AccountTypePasswordProps> = ({
  next,
  prev,
  data,
  schema,
}) => {
  const handleSubmit = (values: ISignup) => {
    next(values, true);
  };
  return (
    <div className='form-container'>
      <h3 className='form-title'>Password & Bussines Acount</h3>

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
                  label='Password'
                  name='password'
                  type='text'
                  required={true}
                />
              </div>

              <div className='checkbox-group'>
                <CheckboxInput name='is_business'>
                  Is Business Account?
                </CheckboxInput>
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
                signup
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountTypePassword;
