import { OnNextButtonClick, ProductTourType, StepType } from './productTour.types';
import tourStepsMap from './Steps';

export const productToursMap = {
  home: ['homeTour'],
  about: ['aboutTour'],
  dashboard: ['dashboardTour'],
};

const productTourService = {
  getSteps: (tourSlug: string, onFinishTour: OnNextButtonClick): StepType[] => {
    const stepsGenerator = tourStepsMap[tourSlug];
    if (typeof stepsGenerator === 'function') return stepsGenerator({ onFinishTour });
    return [];
  },

  getTourStepsByPage: ({
    page,
    productTours,
    onFinishTour,
  }: {
    page: keyof typeof productToursMap;
    productTours: Array<ProductTourType>;
    onFinishTour: OnNextButtonClick;
  }): { steps: StepType[]; tourSlug: string } => {
    const productTour = productTours.find((pt) => productToursMap[page].includes(pt.slug));
    if (!productTour || productTour.isDone) return { steps: [], tourSlug: '' };
    return {
      steps: productTourService.getSteps(productTour?.slug, onFinishTour),
      tourSlug: productTour.slug,
    };
  },
};
export default productTourService;
