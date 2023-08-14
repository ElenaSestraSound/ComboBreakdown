import { render, screen } from '@testing-library/react';
import Main from '../main/page';

describe('Main Page', () => {
  it('renders heading', () => {
    render(<Main />);
    const heading = screen.getByText(/Characters/i);
    expect(heading).toBeInTheDocument();
  });
});
