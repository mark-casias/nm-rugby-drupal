import heroTwig from './branding-hero.twig';
import heroData from './branding-hero.yml';

export default {
  title: 'Paragraph/Branding Hero',
};

export const BrandingHero = () => heroTwig(heroData);
