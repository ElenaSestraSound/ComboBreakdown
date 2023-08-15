import { render, screen } from '@testing-library/react';
import Main from '../main/page';

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

describe('Main Page', () => {
  it('renders heading', async () => {
    render(<Main />);
    const heading = screen.getByText(/Characters/i);
    expect(heading).toBeInTheDocument();
  });
});
