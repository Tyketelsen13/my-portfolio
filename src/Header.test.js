import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders name in Header', () => {
  render(<Header />);
  expect(screen.getByText(/Tiace Ketelsen/i)).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<Header />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
