import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useTour } from '@reactour/tour';
import productTourService, { productToursMap } from './productTour.service';
import { OnNextButtonClick } from './productTour.types';
import { ProductTourContext } from '../ProductTourContextProvider';

const useProductTour = (page: keyof typeof productToursMap) => {
  const { setIsOpen, setSteps, setCurrentStep, currentStep } = useTour();

  const { productTours, markTourAsDone } = useContext(ProductTourContext);

  const onFinishTour: OnNextButtonClick = async ({ currentStep, steps }, cb) => {
    if (currentStep === steps.length - 1) {
      await onTourEnd();
      if (cb && typeof cb === 'function') cb();
    }
  };

  const { steps, tourSlug } = useMemo(() => {
    return productTourService.getTourStepsByPage({ page, productTours, onFinishTour });
  }, [page, productTours]);

  const onTourEnd = useCallback(async () => {
    setIsOpen(false);
    markTourAsDone(tourSlug);
  }, [setIsOpen]);

  useEffect(() => {
    return () => {
      if (currentStep === steps.length - 1) onTourEnd();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  useEffect(() => {
    if (setSteps) {
      setSteps(steps);
      setCurrentStep(0);
      if (steps.length > 0) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
    return () => setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, tourSlug]);
};

export default useProductTour;
