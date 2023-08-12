import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('Root Page', () => {
  it('renders hello', () => {
    render(<Page />);
    const hello = screen.getByText(/hello/i);
    expect(hello).toBeInTheDocument();
  });
});
