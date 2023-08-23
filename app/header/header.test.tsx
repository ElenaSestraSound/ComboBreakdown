import { render, screen } from '@testing-library/react';
import MainHeader from '../header/header';

describe('Main Header', () => {
  it('renders the main heading', () => {
    render(<MainHeader />);
    const heading = screen.getByRole('heading', {
      name: /combo breakdown/i
    });
    expect(heading).toBeInTheDocument();
  });
});
