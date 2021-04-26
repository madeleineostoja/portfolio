import { GA_TRACKING_ID } from './consts';
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const pageview = (url: URL) => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
