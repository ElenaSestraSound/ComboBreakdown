import { render, screen, waitFor } from '@testing-library/react';
import ComparePage from './page';

const mockList = [{
  "name": "luke", "bio": "A contractor for a PMC.", "height": "6'1", "like": "Wwacky T-shirts",
  "notlike": "Horror games", "weight": "198 lbs", "vitality": { "$numberLong": "10000" },
  "moves": [{ "_id": { "$oid": "64e5bdd03d720ec065fe3fe2" }, "name": "Standing Light Punch", "type": "normal", "classic": "LP", "modern": "L", "startup": { "$numberLong": "7" }, "active": "7-8", "hitStunRecovery": { "$numberLong": "2" }, "blockStunRecovery": { "$numberLong": "-3" }, "damage": { "$numberLong": "300" }, "scaling": "Starter scaling 10%", "driveIncreaseHit": { "$numberLong": "250" }, "driveDecreaseBlock": { "$numberLong": "-500" }, "driveDecreasePunish": { "$numberLong": "-2000" }, "superArtGaugeIncrease": { "$numberLong": "300" }, "properties": "High", "miscellaneous": "3 frames of recovery added when the attack misses", "characterId": { "$oid": "64e5bdd03d720ec065fe3fe1" } }]
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

describe('Compare Page', () => {
  it('should render', async () => {
    render(<ComparePage />);
    const img = screen.getByRole('img', { name: /an image of vs letters/i });
    await waitFor(() => expect(img).toBeInTheDocument);
  });
});
