import { createRoot } from 'react-dom/client';
import Register from './Register';
import Login from './Login';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<Login/>);