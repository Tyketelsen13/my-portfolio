import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects section title', () => {
  render(<Projects />);
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
});

test('renders at least one project card', () => {
  render(<Projects />);
  expect(screen.getAllByText(/Live Demo/i).length).toBeGreaterThan(0);
});
