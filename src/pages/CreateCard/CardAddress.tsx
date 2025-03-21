import '../../components/Forms/Forms.css';
import '../../css/btn.css';
import { FunctionComponent } from 'react';
import { ICreateCard } from '../../interfaces/forms/ICreateCard';
import { Formik, Form } from 'formik';
import TextInput from '../../components/TextInput/TextInput';

interface CardAddressProps {
  next: (newCardData: ICreateCard, final: boolean) => void;
  prev: (newCardData: ICreateCard) => void;
  data: ICreateCard;
  schema: any;
  isCreate: boolean;
}

const CardAddress: FunctionComponent<CardAddressProps> = ({
  next,
  prev,
  data,
  schema,
  isCreate,
}) => {
  const handleSubmit = (values: ICreateCard) => next(values, true);
  return (
    <div className='form-container'>
      <h3 className='form-title'>Address</h3>

      <Formik
        initialValues={data}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={schema}
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
                className='btn btn-secondary'
                type='button'
                onClick={() => prev(values)}
              >
                Back
              </button>
              <button className='btn' type='submit'>
                {isCreate ? 'Create Card' : 'Update Card'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardAddress;
