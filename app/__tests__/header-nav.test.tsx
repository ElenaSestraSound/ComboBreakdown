import { render, screen } from '@testing-library/react';

import NavBar from '../header/header-nav';

describe('Header Nav', () => {
  it('renders the main navigation element', () => {
    render(<NavBar />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });
});
