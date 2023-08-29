import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', () => {
  <BrowserRouter>
  render(<App />);
  </BrowserRouter>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
