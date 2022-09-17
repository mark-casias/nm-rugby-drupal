import fullWidthTwig from './full-width.twig';

import mainMenu from '../02-molecules/menus/main-menu/main-menu.yml';
import socialMenu from '../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../02-molecules/menus/inline/inline-menu.yml';
import siteData from '../03-organisms/site/site.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

export const fullWidth = () =>
  fullWidthTwig({
    ...mainMenu,
    ...siteData,
    ...socialMenu,
    ...footerMenu,
  });
