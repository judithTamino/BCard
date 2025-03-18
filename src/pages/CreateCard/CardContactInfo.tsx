import '../../components/Forms/Forms.css';
import '../../css/btn.css';
import { FunctionComponent } from 'react';
import { ICreateCard } from '../../interfaces/forms/ICreateCard';
import { Formik, Form } from 'formik';
import TextInput from '../../components/TextInput/TextInput';

interface CardContactInfoProps {
  next: (newCardData: ICreateCard) => void;
  prev: (newCardData: ICreateCard) => void;
  data: ICreateCard;
  schema: any;
}

const CardContactInfo: FunctionComponent<CardContactInfoProps> = ({
  next,
  prev,
  data,
  schema,
}) => {
  const handleSubmit = (values: ICreateCard) => next(values);
  return (
    <div className='form-container'>
      <h3 className='form-title'>Contact Information</h3>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values }) => (
          <Form>
            <div className='form-data'>
              <div className='input-group'>
                <TextInput
                  label='Email'
                  name='email'
                  type='text'
                  required={true}
                />
              </div>

              <div className='input-group'>
                <TextInput
                  label='Phone'
                  name='phone'
                  type='text'
                  required={true}
                />
              </div>

              <div className='input-group'>
                <TextInput
                  label='Web URL'
                  name='web'
                  type='text'
                  required={false}
                />
              </div>
            </div>

            <div className='form-btns-container grid'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => prev(values)}
              >
                Back
              </button>
              <button
                className='btn'
                type='submit'
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardContactInfo;
