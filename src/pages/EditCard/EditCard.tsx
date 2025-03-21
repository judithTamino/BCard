import '../../components/Forms/Forms.css';
import '../../css/btn.css';
import { FunctionComponent, useEffect, useState } from 'react';
import { ICreateCard } from '../../interfaces/forms/ICreateCard';
import { cardInitialValues as defaultValues } from '../../constants/cardInitialValues';
import { getCardById, updateCard } from '../../services/cardService';
import { useNavigate, useParams } from 'react-router-dom';
import { errorMsg, sucessMsg } from '../../services/feedbackService';
import { removeColon } from '../../utils/removeColon';
import CardBasicInfo from '../CreateCard/CardBasicInfo';
import { cardSchema } from '../../schemas/cardSchema';
import CardContactInfo from '../CreateCard/CardContactInfo';
import CardImage from '../CreateCard/CardImage';
import CardAddress from '../CreateCard/CardAddress';
import { unvalidCard } from '../../utils/unvalidCard';
import { validCard } from '../../utils/validCard';

interface EditCardProps {}

const EditCard: FunctionComponent<EditCardProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cardInitialValues, setCardInitialValues] =
    useState<ICreateCard>(defaultValues);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    <CardBasicInfo
      next={handleNextStep}
      data={cardInitialValues}
      schema={cardSchema[currentStep]}
    />,
    <CardContactInfo
      next={handleNextStep}
      prev={handlePrevStep}
      data={cardInitialValues}
      schema={cardSchema[currentStep]}
    />,
    <CardImage
      next={handleNextStep}
      prev={handlePrevStep}
      data={cardInitialValues}
      schema={cardSchema[currentStep]}
    />,
    <CardAddress
      next={handleNextStep}
      prev={handlePrevStep}
      data={cardInitialValues}
      schema={cardSchema[currentStep]}
      isCreate={false}
    />,
  ];

  useEffect(() => {
    getCardById(id as string)
      .then((res) => {
        setCardInitialValues(unvalidCard(res.data));
      })
      .catch((error) => errorMsg(`${removeColon(error.response.data)}`));
  }, []);

  function handleNextStep(newCardData: ICreateCard, final = false) {
    setCardInitialValues((prev) => ({ ...prev, ...newCardData }));

    if (final) {
      handleUpdateCard(newCardData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  }

  function handlePrevStep(newCardData: ICreateCard) {
    setCardInitialValues((prev) => ({ ...prev, ...newCardData }));
    setCurrentStep((prev) => prev - 1);
  }

  function handleUpdateCard(newCardData: ICreateCard) {
    const card = validCard(newCardData);
    updateCard(id as string, card)
      .then(() => {
        sucessMsg('Card update successfully.')
        navigate('/myCards')
      })
      .catch((error) => {
        if (error.response.data.includes('E11000')) {
          errorMsg('Could not update card, because email already exists!');
        } else errorMsg(`${removeColon(error.response.data)}`);
      });
  }

  return (
    <section className='edit section'>
      <div className='edit-container container'>
        <h2 className='section-title'>Edit Card</h2>
        {steps[currentStep]}
      </div>

      <div className="form-btns container">
        <button className="btn btn-secondary" onClick={() => navigate('/myCards')}>
          Cancel
        </button>
      </div>
    </section>
  );
};

export default EditCard;
