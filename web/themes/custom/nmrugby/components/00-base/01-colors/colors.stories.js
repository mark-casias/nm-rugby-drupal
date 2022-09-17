import colorsTwig from './colors.twig';

import colorsData from './colors.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Colors',
};

export const Colors = () => colorsTwig(colorsData);
