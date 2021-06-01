import SwipeListener from 'swipe-listener';

export default function swipe(el: HTMLElement, opts?: any) {
  const listener = SwipeListener(el, opts);

  return {
    destroy() {
      listener.off();
    }
  };
}
