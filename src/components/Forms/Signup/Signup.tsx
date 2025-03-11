import { FunctionComponent, useState } from 'react';

// Components
import BasicInfo from './BasicInfo';
import AccountTypePassword from './AccountTypePassword';
import FormImage from '../FormImage';
import FormAddress from '../FormAddress';
// Interface
import { ISignup } from '../../../interfaces/forms/ISignup';
import { userSchema } from '../../../schemas/userSchema';

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  const [data, setData] = useState<ISignup>({
    first: '',
    middle: '',
    last: '',
    phone: '',
    email: '',
    password: '',
    image_url: '',
    image_alt: '',
    state: '',
    country: '',
    city: '',
    street: '',
    house_number: 0,
    zip: 0,
    is_business: false,
  });
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNextStep = (newData: ISignup, final = false) => {
    setData((prevData) => ({ ...prevData, ...newData }));

    if(final) {
      console.log(`user: `, newData);
      return;
    }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = (newData: ISignup) => {
    setData((prevData) => ({ ...prevData, ...newData }));
    setActiveStep((prevStep) => prevStep - 1);
  };

  const steps = [
    <BasicInfo next={handleNextStep} data={data} schema={userSchema[activeStep]} />,
    <FormImage prev={handlePrevStep} next={handleNextStep} data={data} />,
    <FormAddress />,
    <AccountTypePassword />,
  ];

  return (
    <article className='signup section'>
      <div className='signup-container container'>
        <h2 className='section-title'>Signup</h2>
        {steps[activeStep]}
      </div>
    </article>
  );
};

export default Signup;
