import footerTwig from './site-footer/site-footer.twig';
import siteHeader from './site-header/site-header.twig';
import sitePreHeader from './pre-header/pre-header.twig';

import footerSocial from '../../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../../02-molecules/menus/inline/inline-menu.yml';
import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';
import siteData from './site.yml';

import '../../02-molecules/menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const preHeader = () => sitePreHeader();

export const header = () =>
  siteHeader({
    ...breadcrumbData,
    ...mainMenuData,
    ...siteData,
  });

export const footer = () => footerTwig({ ...footerSocial, ...footerMenu });
