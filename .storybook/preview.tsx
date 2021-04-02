import { Global } from '@emotion/react';
import { DocsContainer, Stories } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import 'pollen-css';
import styles from '../src/styles';
import nextImgShim from './lib/nextImage';
import 'react-medium-image-zoom/dist/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'typeface-inter';

// Shim next/image
nextImgShim();

// Change title of stories
Stories.defaultProps = {
  title: 'Examples'
};

// Global styles
addDecorator((story: any) => (
  <>
    <Global styles={styles} />
    {story()}
  </>
));

addParameters({
  docs: {
    container: ({ children, context }: any) => (
      <DocsContainer context={context}>
        <Global styles={styles} />
        {children}
      </DocsContainer>
    )
  }
});
