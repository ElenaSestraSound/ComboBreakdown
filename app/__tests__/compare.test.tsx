import { render, screen } from '@testing-library/react';
import Compare from '../compare/page';

describe('Compare Page', () => {
  it('renders hello', () => {
    render(<Compare />);
    const compareText = screen.getByText(/Compare/i);
    expect(compareText).toBeInTheDocument();
  });
});
