import { FunctionComponent, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
// Components
import BasicInfo from './BasicInfo';
import AccountTypePassword from './AccountTypePassword';
import FormImage from '../FormImage';
import FormAddress from '../FormAddress';
// Utils
import { validationSchema } from '../../../utils/validationSchema/validationSchema';
import { signupInitialValues } from '../../../utils/initialValues/signup/signupValues';
import { ISignup } from '../../../interfaces/forms/ISignup';

interface SignupProps {}

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <BasicInfo />;
    case 1:
      return <FormImage />;
    case 2:
      return <FormAddress />;
    case 3:
      return <AccountTypePassword />;
    case 4:
      return <div>Confirm</div>;
  }
};

const Signup: FunctionComponent<SignupProps> = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === validationSchema.length - 1;

  const prevStep = () => {
    setActiveStep((step) => step - 1);
  };

  // const handleSubmit = (values: ISignup, actions: FormikHelpers<ISignup>) => {
  //   if (isLastStep) alert(`values ${values}`);
  //   else {
  //     setActiveStep((step) => step + 1);
  //     actions.setTouched({});
  //     actions.setSubmitting(false);
  //   }
  // };

  return (
    <article className='signup section'>
      <div className='signup-container container'>
        <h2 className='section-title'>Signup</h2>

        <Formik
          initialValues={signupInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={(values, {setSubmitting}) => {
            console.log(values);
            setSubmitting(false);
            // if (isLastStep) alert(`values ${values}`);
            // else {
            //   setActiveStep((step) => step + 1);
            //   actions.setTouched({});
            //   actions.setSubmitting(false);
            // }
          }}
        >
          {(formik) => (
            <Form>
              {renderStepContent(activeStep)}
              <div className='btns-container container'>
                {activeStep !== 0 && (
                  <button className='btn' type='button' onClick={prevStep}>
                    Back
                  </button>
                )}

                <button type='submit' className='btn' disabled={formik.isSubmitting}>
                  {isLastStep ? 'Submit' : 'Continue'}
                </button>

                {/* {activeStep === 0 ? (
                  <div className='grid'>
                    <button className='btn pre-btn' type='button'>Prev</button>
                    <button type="submit" className='btn next-btn'>Continue</button>
                  </div>
                ) : (
                  <div className='btn-container'>
                    <button type="submit" className='btn next-btn'>Continue</button>
                  </div>
                )} */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </article>
  );
};

export default Signup;
