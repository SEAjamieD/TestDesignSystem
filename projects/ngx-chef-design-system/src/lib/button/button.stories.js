import { actions, action } from '@storybook/addon-actions';
import { NgxChefButtonComponent } from './button.component';

export default {
  title: 'Task',
  excludeStories: /.*Data$/,
};

export const Default = () => ({
  component: NgxChefButtonComponent
});

export const withText = () => ({
  component: NgxChefButtonComponent,
  props: {
    buttonText: "I'm a Button",
  },
});

export const Secondary = () => ({
  component: NgxChefButtonComponent,
  props: {
    buttonText: 'Secondary',
    style: 'secondary'
  },
});

export const Disabled = () => ({
  component: NgxChefButtonComponent,
  props: {
    buttonText: "I'm Disabled",
    disabled: true
  },
});

export const withSpinner = () => ({
  component: NgxChefButtonComponent,
  props: {
    buttonText: "Loading...",
    loading: true
  }
})

export const withAction = () => ({
  component: NgxChefButtonComponent,
  props: {
    buttonText: 'Click me and check the Actions Tab!',
    onClick: action("I've been clicked!")
  },
});
