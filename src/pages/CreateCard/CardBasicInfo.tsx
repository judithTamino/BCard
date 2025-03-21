import '../../components/Forms/Forms.css';
import '../../css/btn.css';
import { FunctionComponent } from 'react';
import { ICreateCard } from '../../interfaces/forms/ICreateCard';
import { Formik, Form } from 'formik';
import TextInput from '../../components/TextInput/TextInput';
import TextareaInput from '../../components/TextareaInput/TextareaInput';

interface CardBasicInfoProps {
  next: (newCardData: ICreateCard) => void;
  data: ICreateCard;
  schema: any;
}

const CardBasicInfo: FunctionComponent<CardBasicInfoProps> = ({
  next,
  data,
  schema,
}) => {
  const handleSubmit = (values: ICreateCard) => next(values);

  return (
    <div className='form-container'>
      <h3 className='form-title'>Title & Description</h3>
      <Formik
        initialValues={data}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {() => (
          <Form>
            <div className='form-data'>
              <div className='input-group'>
                <TextInput
                  label='Title'
                  name='title'
                  type='text'
                  required={true}
                />
              </div>

              <div className='input-group'>
                <TextInput
                  label='Subtitle'
                  name='subtitle'
                  type='text'
                  required={true}
                />
              </div>

              <div className='input-group'>
                <TextareaInput
                  label='Description'
                  name='description'
                  required={true}
                />
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

export default CardBasicInfo;
