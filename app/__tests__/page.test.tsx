import { render, screen } from '@testing-library/react';
import Page from '../page';

jest.mock('../main/character-list');
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  use: jest.fn(() => { })
}));
jest.mock('../../utils/get-characters', () => ({
  getCharacters: () => jest.fn(() => { })
})
);
afterEach(() => {
  jest.clearAllMocks();
});

describe('Root Page', () => {
  it('renders heading', async () => {
    render(<Page />);
    const heading = screen.getByText(/Characters/i);
    expect(heading).toBeInTheDocument();
  });
});
