import { render, screen } from '@testing-library/react';
import Page from '../page';

jest.mock('../main/character-list');

describe('Root Page', () => {
  it('renders heading', async () => {
    render(<Page />);
    const heading = screen.getByText(/Characters/i);
    expect(heading).toBeInTheDocument();
  });
});
