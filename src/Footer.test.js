import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders copyright in Footer', () => {
  render(<Footer />);
  expect(screen.getByText(/© 2025 Ty Ketelsen/i)).toBeInTheDocument();
});
