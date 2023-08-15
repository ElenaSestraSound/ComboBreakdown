import { render, screen } from '@testing-library/react';
import Main from '../main/page';

jest.mock('../main/character-list');

describe('Main Page', () => {
  it('renders heading', async () => {
    render(<Main />);
    const heading = screen.getByText(/Characters/i);
    expect(heading).toBeInTheDocument();
  });
});
