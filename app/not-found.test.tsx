import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

describe('Not Found Page', () => {
  it('renders links back home', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', {
      name: /return home/i
    });
    expect(link).toBeInTheDocument();
  });
});
