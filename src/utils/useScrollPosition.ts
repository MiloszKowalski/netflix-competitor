/*
  Hook from https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
  Used in form of a source code for typing purpose
*/

import { useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

type elementScroll = {
  element?: any,
  useWindow?: boolean
}

function getScrollPosition({ element, useWindow }: elementScroll) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition(
  effect: (...args: any[]) => any,
  deps?: any[],
  element?: any,
  useWindow?: boolean,
  wait: number = 100) {

  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout:  NodeJS.Timeout | null = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}
