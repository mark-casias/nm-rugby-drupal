// Buttons Stories
import buttonTwig from './button.twig';
import buttonData from './button.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Button',
  argTypes: {
    buttonText: {
      name: 'Text',
      control: { type: 'text' },
      defaultValue: 'Button Text',
    },
    buttonModifiers: {
      name: 'Button Modifiers',
      type: Array,
      control: {
        type: 'check',
        options: {
          Alternative: 'alt',
          Small: 'small',
          Large: 'large',
        },
      },
    },
  },
};

export const Button = ({ buttonText, buttonModifiers }) =>
  buttonTwig({
    ...buttonData,
    button_content: buttonText,
    button_modifiers: buttonModifiers,
  });
