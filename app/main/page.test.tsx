import { render, screen } from '@testing-library/react';
import Main from './page';

const mockList = [{
  "name": "luke", "bio": "A contractor for a PMC.", "height": "6'1", "like": "Wwacky T-shirts",
  "notlike": "Horror games", "weight": "198 lbs", "vitality": { "$numberLong": "10000" }
}];

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  cache: jest.fn(() => { }),
  use: jest.fn(() => mockList)
}));
jest.mock('../../utils/get-characters', () => ({
  getCharacters: () => jest.fn(() => { })
})
);
afterEach(() => {
  jest.clearAllMocks();
});

describe('Main Page', () => {
  it('should render a character list', async () => {
    render(<Main />);
    const list = screen.getByRole('list', { name: /character\-list/i });
    expect(list).toBeInTheDocument;
  });

  it('should render a character image', async () => {
    render(<Main />);
    const img = screen.getByRole('img', { name: /character\-image/i });
    expect(img).toBeInTheDocument;
  });
});
