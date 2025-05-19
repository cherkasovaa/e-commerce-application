import { useState } from 'react';
import { ONE_SECOND } from './constants';

export const useCountDown = (initValue: number) => {
  const [counter, setCounter] = useState(initValue);
  const startCountDown = () =>
    new Promise<void>((resolve) => {
      const tick = () => {
        setCounter((prev) => {
          if (prev > 1) {
            setTimeout(tick, ONE_SECOND);
            return prev - 1;
          } else {
            resolve();
            return 0;
          }
        });
      };
      setTimeout(tick, ONE_SECOND);
    });

  return { counter, startCountDown };
};
