import React from 'react';
import { TourProvider } from '@reactour/tour';

type Props = { children: React.ReactElement };

const ProductTour: React.FC<Props> = ({ children }) => {

  return (
    <TourProvider
      steps={[]}
      showDots={false}
      badgeContent={({ currentStep, totalSteps }) => `${currentStep + 1} / ${totalSteps}`}
      showCloseButton={false}
      showNavigation={false}
      disableInteraction
      onClickMask={() => { }}
      onClickHighlighted={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </TourProvider>
  );
};

export default ProductTour;

