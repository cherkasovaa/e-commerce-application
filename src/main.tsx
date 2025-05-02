import React from 'react';
import ReactDOM from 'react-dom/client';
import { sum } from './index';
import testImage from './assets/test.png';
import { Typography } from '@mui/material';

export const App = (): React.JSX.Element => {
  return (
    <>
      <Typography> Test function = {sum(5)}</Typography>
      <img src={testImage} alt="test icon" />
    </>
  );
};

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(<App />);
