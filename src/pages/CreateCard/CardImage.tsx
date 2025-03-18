import '../../components/Forms/Forms.css';
import '../../css/btn.css';
import { FunctionComponent } from 'react';
import { ICreateCard } from '../../interfaces/forms/ICreateCard';
import { Formik, Form } from 'formik';
import TextInput from '../../components/TextInput/TextInput';

interface CardImageProps {
  next: (newCardData: ICreateCard) => void;
  prev: (newCardData: ICreateCard) => void;
  data: ICreateCard;
  schema: any;
}

const CardImage: FunctionComponent<CardImageProps> = ({next, prev, data, schema}) => {
  const handleSubmit = (values: ICreateCard) => next(values);
  return (
    <div className='form-container'>
      <h3 className='form-title'>Image</h3>

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
                  label='Image URL'
                  name='image_url'
                  type='text'
                  required={true}
                />
              </div>

              <div className='input-group'>
                <TextInput
                  label='Description'
                  name='image_alt'
                  type='text'
                  required={true}
                />
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
                next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardImage;
