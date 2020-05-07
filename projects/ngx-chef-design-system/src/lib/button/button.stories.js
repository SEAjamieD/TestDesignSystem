import { actions, action } from '@storybook/addon-actions';
import { NgxChefButtonComponent } from './button.component';

export default {
  title: 'Task',
  excludeStories: /.*Data$/,
};

export const Default = () => ({
  component: ButtonComponent
});

export const withText = () => ({
  component: ButtonComponent,
  props: {
    buttonText: "I'm a Button",
  },
});

export const Secondary = () => ({
  component: ButtonComponent,
  props: {
    buttonText: 'Secondary',
    style: 'secondary'
  },
});

export const withAction = () => ({
  component: ButtonComponent,
  props: {
    buttonText: 'Check the Actions Tab!',
    onClick: action("I've been clicked!")
  },
});
