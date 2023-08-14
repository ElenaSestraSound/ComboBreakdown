import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('Root Page', () => {
  it('renders heading', () => {
    render(<Page />);
    const heading = screen.getByText(/Characters/i);
    expect(heading).toBeInTheDocument();
  });
});
