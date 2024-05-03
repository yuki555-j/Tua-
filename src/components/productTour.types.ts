import * as reactour from '@reactour/tour';

export type StepType = reactour.StepType;

export type simpleTourProps = Pick<
  reactour.TourProps,
  'currentStep' | 'steps' | 'setCurrentStep' | 'meta' | 'setIsOpen' | 'isOpen' | 'setSteps'
>;

export type OnNextButtonClick = (_options: simpleTourProps, _cb?: Function) => void;

export type ProductTourType = { slug: string, isDone: boolean }
