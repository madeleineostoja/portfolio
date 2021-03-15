import icon from '../public/icon.png';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Madeleine Ostoja',
    brandUrl: 'https://madeleineostoja.com',
    brandImage: icon,
    colorPrimary: '#D71673',
    colorSecondary: '#D71673'
  }),
  showRoots: true,
  viewMode: 'docs'
});
