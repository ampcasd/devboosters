import { CTAConfiguration } from './call-to-action/call-to-action.component';

export const callToAction: { [key: string]: CTAConfiguration } = {
  assistants: {
    showForm: true,
    header: 'Are you interested',
    description:
      'Get your own assistant working for you and invest in your growth. Here it is your interest that is the priority',
    buttonText: 'GET STARTED!',
  },

  default: {
    header: 'Are you interested?',
    description: 'Do you have any questions?',
    buttonText: 'CONTACT US!',
    showForm: false,
  },
};
