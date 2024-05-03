import React from 'react';
import { useTour } from '@reactour/tour';
import NextButton from './NextButton';
import { OnNextButtonClick } from './productTour.types';

type Props = {
  text: string;
  onNextButtonClick?: OnNextButtonClick;
  afterClickNext?: Function;
  nextButtonDisabled?: boolean;
};

const StepContent: React.FC<Props> = ({
  text,
  onNextButtonClick,
  afterClickNext,
  nextButtonDisabled,
}) => {
  const { setCurrentStep, steps, currentStep, setIsOpen, setSteps, onClickClose, isOpen } = useTour();

  const handleNextButtonClick = async () => {
    if (onNextButtonClick && typeof onNextButtonClick === 'function') {
      onNextButtonClick({ setCurrentStep, steps, currentStep, setIsOpen, setSteps, isOpen }, afterClickNext);
    } else {
      setCurrentStep(currentStep + 1);
      if (afterClickNext && typeof afterClickNext === 'function') afterClickNext();
    }
  };

  const handleClose = () => {
    if (onClickClose && typeof onClickClose === 'function') {
      onClickClose({ setIsOpen, setCurrentStep, currentStep, steps, setSteps });
    }
    setIsOpen(false);
  };
  return (
    <div className="d-flex">
      <div className="d-flex flex-column">
        <div className="d-flex flex-grow-1">
          <p className="text-bloom-dark-blue align-self-center me-5">
            {text}
          </p>
          <button onClick={handleClose} type="button" className="btn-close" aria-label="Close"></button>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <NextButton
            isLastStep={currentStep === steps.length - 1}
            onClick={handleNextButtonClick}
            disabled={nextButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default StepContent;

