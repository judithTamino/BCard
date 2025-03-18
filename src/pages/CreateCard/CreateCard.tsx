import { FunctionComponent, useState } from 'react';
import { ICreateCard } from '../../interfaces/forms/ICreateCard';
import CardBasicInfo from './CardBasicInfo';
import CardContactInfo from './CardContactInfo';
import { cardSchema } from '../../schemas/cardSchema';
import CardImage from './CardImage';
import CardAddress from './CardAddress';
import { validCard } from '../../utils/validCard';
import { CreateNewCard } from '../../services/cardService';
import { errorMsg, sucessMsg } from '../../services/feedbackService';
import { removeColon } from '../../utils/removeColon';
import { useNavigate } from 'react-router-dom';

interface CreateCradProps {}

const CreateCrad: FunctionComponent<CreateCradProps> = () => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState<ICreateCard>({
    title: '',
    subtitle: '',
    description: '',
    phone: '',
    email: '',
    web: '',
    image_url: '',
    image_alt: '',
    state: '',
    country: '',
    city: '',
    street: '',
    house_number: 0,
    zip: 0,
  });
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [
    <CardBasicInfo
      next={handleNextStep}
      data={cardData}
      schema={cardSchema[currentStep]}
    />,
    <CardContactInfo
      next={handleNextStep}
      prev={handlePrevStep}
      data={cardData}
      schema={cardSchema[currentStep]}
    />,
    <CardImage
      next={handleNextStep}
      prev={handlePrevStep}
      data={cardData}
      schema={cardSchema[currentStep]}
    />,
    <CardAddress
      next={handleNextStep}
      prev={handlePrevStep}
      data={cardData}
      schema={cardSchema[currentStep]}
    />,
  ];

  function handleNextStep(newCardData: ICreateCard, final = false) {
    setCardData((prev) => ({ ...prev, ...newCardData }));

    if (final) {
      createCard(newCardData);
      navigate('/');
      return;
    }
    setCurrentStep((prev) => prev + 1);
  }

  function handlePrevStep(newCardData: ICreateCard) {
    setCardData((prev) => ({ ...prev, ...newCardData }));
    setCurrentStep((prev) => prev - 1);
  }

  function createCard(newCardData: ICreateCard) {
    const card = validCard(newCardData);
    const token = sessionStorage.getItem('token');
    CreateNewCard(card, token)
      .then(() => {
        sucessMsg('card create successfully');
      })
      .catch((error) => {
        console.log(error)
        if (error.response.data.includes('E11000')) errorMsg('Email already exists!');
        else errorMsg(`${removeColon(error.response.data)}`);
      });
  }

  return (
    <section className='create section'>
      <div className='create-container container'>
        <h2 className='section-title'>Create Card</h2>
        {steps[currentStep]}
      </div>
    </section>
  );
};

export default CreateCrad;
