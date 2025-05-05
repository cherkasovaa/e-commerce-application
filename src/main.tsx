import ReactDOM from 'react-dom/client';
import { App } from './app/App';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(<App />);
