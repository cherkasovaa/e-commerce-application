import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './main.module.scss';
import { sum } from './index';
import testImage from './assets/test.png';

export const App = (): React.JSX.Element => {
  return (
    <>
      <p className={styles.title}>Test function = {sum(5)}</p>
      <img src={testImage} alt="test icon" />
    </>
  );
};

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(<App />);
