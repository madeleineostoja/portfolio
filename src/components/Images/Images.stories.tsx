import { Images, ImagesProps } from '.';

export default {
  title: 'Components/Images',
  component: Images
};

export const Default = (props: ImagesProps) => (
  <Images {...props} />
);