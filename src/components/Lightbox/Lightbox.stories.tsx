import { Lightbox, LightboxProps } from '.';

export default {
  title: 'Components/Lightbox',
  component: Lightbox
};

export const Default = (props: LightboxProps) => (
  <Lightbox {...props} />
);