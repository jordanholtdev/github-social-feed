import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders Github Social Feed title', () => {
  render(<App />);
  const title = screen.getByText(/Github Social Feed/i);
  expect(title).toBeInTheDocument();
});

