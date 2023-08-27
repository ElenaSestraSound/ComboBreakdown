import { render, screen } from '@testing-library/react';
import CharacterPage from './page';

const mockLuke = {
  "name": "luke", "bio": "A contractor for a PMC, Luke uses his elite military background to teach mixed martial arts. ",
  "height": "6'1", "like": "Travelling, PC games, wacky T-shirts", "notlike": "Horror games", "weight": "198 lbs",
  "vitality": { "$numberLong": "10000" }
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  cache: jest.fn(() => { }),
  use: jest.fn(() => mockLuke)
}));
jest.mock('../../utils/get-character', () => ({
  getCharacter: jest.fn(() => { })
})
);
afterEach(() => {
  jest.clearAllMocks();
});

describe('Character Page', () => {
  it('renders the mocked character', () => {
    render(<CharacterPage searchParams={{ charName: 'luke' }} />);
    const name = screen.getByRole('heading', { name: /luke/i });
    expect(name).toBeInTheDocument();
  });
});
