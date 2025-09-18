import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders hero headline', () => {
  render(<Hero />);
  expect(screen.getByText(/Hi, I’m Tiace/i)).toBeInTheDocument();
});

test('renders call-to-action button', () => {
  render(<Hero />);
  expect(screen.getByRole('link', { name: /View Projects/i })).toBeInTheDocument();
});
