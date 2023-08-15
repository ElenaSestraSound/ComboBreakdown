import { render, screen } from '@testing-library/react';
import CharacterList from '../main/character-list';

const mockData = [{ "_id": { "$oid": "64d7a13db724f33feb38699f" }, "name": "Luke", "bio": "A contractor for a PMC, Luke uses his elite military background to teach mixed martial arts. His days off are spent eating junk food, playing video games, and fighting, but make no mistake—Luke plays to win.", "like": "Travelling, PC games, wacky T-shirts", "notlike": "Horror games", "height": "6'1", "weight": "198 lbs" }];
const mockCharacters = mockData;

describe('Character list', () => {
  it('renders heading', async () => {
    render(<CharacterList characters={mockCharacters} />);
    const luke = screen.getByText(/Luke/i);
    expect(luke).toBeInTheDocument();
  });
});
