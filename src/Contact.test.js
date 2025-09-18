import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact section title', () => {
  render(<Contact />);
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});

test('renders Email link', () => {
  render(<Contact />);
  expect(screen.getByText(/Email/i)).toBeInTheDocument();
});
