import { OnNextButtonClick, StepType } from './productTour.types';
import StepContent from './StepContent';

const tourStepsMap: Record<string, (_o: { onFinishTour: OnNextButtonClick }) => StepType[]> = {
  homeTour: ({ onFinishTour }) => [
    {
      selector: '#navbar',
      content: (props) => <StepContent {...props} text='You can use the navbar to navigate through pages' />,
    },
    {
      selector: '#home-nav-btn',
      content: (props) => <StepContent {...props} text='You can go to your home page from here' />,
    },
    {
      selector: '#about-nav-btn',
      content: (props) => (
        <StepContent
          {...props}
          text='Click on about to go to about page, also clicking on Done will take you to the about page'
          // you can use the button to redirect the user to another page, but in this case this will make a re-render
          // and that will reset all the tours, the the tour will never be marked as done, but if you are getting the tours from the backend
          // so you should assign the tour as done in the database using onFinishTour method and then it is fine if the page get a hard reload and
          // not sure if there is a way to redirect the user to another page smoothly with making a whole page reload, if you can achieve that
          // then you can redirect the user safely to the next page
          nextButtonDisabled
        //  onNextButtonClick={onFinishTour}
        //  afterClickNext={() => window.location.assign('about')}
        />
      ),
      stepInteraction: true,
    },
  ],
  aboutTour: () => [
    {
      selector: '#about-p-1',
      content: (props) => <StepContent {...props} text='Read this text' />,
    },
    {
      selector: '#about-p-2',
      content: (props) => <StepContent {...props} text='And this one as well' />,
    },
    {
      selector: '#about-p-3',
      content: (props) => <StepContent {...props} text='You can keep reading but the tour will end here for this page, feel free visit the dashboard page to take your next tour' />,
    },
  ],
  dashboardTour: () => [
    {
      selector: '#dashboard',
      content: (props) => <StepContent {...props} text='You can keep reading but the tour will end here for this page, feel free visit the dashboard page to take your next tour' />,
    },
    {
      selector: '#iamhigh',
      content: (props) => <StepContent {...props} text='this was the end of your tour, if you have any question you can contact mu96@gmail.com' />,
    },
  ],
};

export default tourStepsMap;
