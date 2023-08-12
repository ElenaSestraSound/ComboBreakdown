import { render, screen } from '@testing-library/react';
import Main from '../main/page';

describe('Main Page', () => {
  it('renders hello', () => {
    render(<Main />);
    const hello = screen.getByText(/hello/i);
    expect(hello).toBeInTheDocument();
  });
});
