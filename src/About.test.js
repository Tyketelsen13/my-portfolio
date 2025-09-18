import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About section title', () => {
  render(<About />);
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
});

test('renders intro text', () => {
  render(<About />);
  expect(screen.getByText(/software developer/i)).toBeInTheDocument();
});
