import heroTwig from './hero.twig';
import heroData from './hero.yml';

export default {
  title: 'Paragraph/Hero',
};

export const hero = () => heroTwig(heroData);
