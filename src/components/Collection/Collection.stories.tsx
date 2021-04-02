import { Collection, CollectionProps } from '.';
import { Page } from '../../../.storybook/lib/Page';

export default {
  title: 'Components/Collection',
  component: Collection
};

export const Default = (props: CollectionProps) => (
  <Page>
    <Collection
      name="Test Collection"
      href="/"
      images={[
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        },
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        },
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        },
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        },
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        },
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        },
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        },
        {
          prismic: {
            url: 'https://source.unsplash.com/random'
          },
          title: 'A Random Image'
        }
      ]}
    />
  </Page>
);
