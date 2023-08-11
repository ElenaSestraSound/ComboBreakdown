import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavBar from '../nav-bar/nav-bar';

describe('NavBar', () => {
  it('renders the main heading', () => {
    render(<NavBar />);
    const heading = screen.getByRole('heading', {
      name: /combo breakdown/i
    });
    expect(heading).toBeInTheDocument();
  });
});
