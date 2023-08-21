import { render, screen } from '@testing-library/react';
import ComparePage from '../compare/page';

describe('Compare Page', () => {
  it('renders hello', () => {
    render(<ComparePage />);
    const compareText = screen.getAllByText(/SELECT A CHARACTER/i);
    expect(compareText.length).toBe(2);
  });
});
