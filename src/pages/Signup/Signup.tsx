import { FunctionComponent, useState } from 'react';

// Components
import BasicInfo from './BasicInfo';
import AccountTypePassword from './AccountTypePassword';
import FormImage from '../../components/Forms/FormImage';
import FormAddress from '../../components/Forms/FormAddress';
// Interface
import { ISignup } from '../../interfaces/forms/ISignup';
import { userSchema } from '../../schemas/userSchema';
import { validUser } from '../../utils/validUser';
import { signup } from '../../services/userService';
import { errorMsg, sucessMsg } from '../../services/feedbackService';
import { useNavigate } from 'react-router-dom';
import { removeColon } from '../../utils/removeColon';

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  const navigate = useNavigate();
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

  const signupUser = (newData: ISignup) => {
    const user = validUser(newData);
    signup(user)
    .then((response) => {
      sucessMsg(`${response.data.email} signup successfuly`);
      navigate('/login');
    })
    .catch((error) => {
      errorMsg(removeColon(error.response.data));
    });
  };

  const handleNextStep = (newData: ISignup, final = false) => {
    setData((prevData) => ({ ...prevData, ...newData }));

    if (final) {
      signupUser(newData);
      return;
    }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = (newData: ISignup) => {
    setData((prevData) => ({ ...prevData, ...newData }));
    setActiveStep((prevStep) => prevStep - 1);
  };

  const steps = [
    <BasicInfo
      next={handleNextStep}
      data={data}
      schema={userSchema[activeStep]}
    />,
    <FormImage
      prev={handlePrevStep}
      next={handleNextStep}
      data={data}
      schema={userSchema[activeStep]}
    />,
    <FormAddress
      prev={handlePrevStep}
      next={handleNextStep}
      data={data}
      schema={userSchema[activeStep]}
    />,
    <AccountTypePassword
      prev={handlePrevStep}
      next={handleNextStep}
      data={data}
      schema={userSchema[activeStep]}
    />,
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
