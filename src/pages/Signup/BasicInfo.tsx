import { FunctionComponent } from 'react';
import { Formik, Form } from 'formik';
// CSS
import '../../components/Forms/Forms.css';
import '../../css/btn.css';

// Components
import TextInput from '../../components/TextInput/TextInput';
// Interface
import { ISignup } from '../../interfaces/forms/ISignup';

interface BasicInfoProps {
  next: (newData: ISignup) => void;
  data: ISignup;
  schema: any;
}

const BasicInfo: FunctionComponent<BasicInfoProps> = ({
  next,
  data,
  schema,
}) => {
  const handleSubmit = (values: ISignup) => {
    next(values);
  };
  return (
    <div className='form-container'>
      <h3 className='form-title'>Basic Info</h3>

      <Formik
        initialValues={data}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className='form-data'>
              <div className='fullname-container grid'>
                <div className='input-group'>
                  <TextInput label='First Name' name='first' type='text' required = {true} />
                </div>

                <div className='input-group'>
                  <TextInput label='Middle Name' name='middle' type='text' required = {false} />
                </div>

                <div className='input-group'>
                  <TextInput label='Last Name' name='last' type='text' required = {true} />
                </div>
              </div>

              <div className='input-group'>
                <TextInput label='Phone' name='phone' type='text' required = {true} />
              </div>

              <div className='input-group'>
                <TextInput label='Email' name='email' type='text' required = {true} />
              </div>
            </div>

            <div className='form-btns-container grid'>
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
