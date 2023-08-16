import { render, screen } from '@testing-library/react';
import Compare from '../compare/page';

describe('Compare Page', () => {
  it('renders hello', () => {
    render(<Compare />);
    const compareText = screen.getAllByText(/SELECT A CHARACTER/i);
    expect(compareText.length).toBe(2);
  });
});
