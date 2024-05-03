import React, { MouseEventHandler } from 'react';

type Props = { onClick: MouseEventHandler<HTMLButtonElement>; isLastStep: boolean; disabled?: boolean };

const NextButton: React.FC<Props> = ({ onClick, isLastStep, disabled }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick} disabled={disabled} >
      {isLastStep ? 'Done' : 'Next'}
    </button>
  );
};

export default NextButton;

