import { render, screen, fireEvent } from '@testing-library/react';
import MoveElem from './move';

const mockData = [
  {
    id: '64e5bdd03d720ec065fe3fe1',
    name: 'luke',
    bio: 'A contractor for a PMC, Luke uses his elite military background to teach mixed martial arts. His days off are spent eating junk food, playing video games, and fighting, but make no mistake—Luke plays to win.',
    height: "6'1",
    like: 'Travelling, PC games, wacky T-shirts',
    notlike: 'Horror games',
    weight: '198 lbs',
    vitality: 10000,
    moves: [{ "_id": { "$oid": "64e5bdc63d720ec065fe3998" }, "name": "Standing Light Punch", "type": "normal", "classic": "LP", "modern": "L", "startup": { "$numberLong": "4" }, "active": "4-5", "missRecovery": { "$numberLong": "9" }, "hitStunRecovery": { "$numberLong": "4" }, "blockStunRecovery": { "$numberLong": "-1" }, "cancelable": "C", "damage": { "$numberLong": "300" }, "scaling": "Starter scaling 10%", "driveIncreaseHit": { "$numberLong": "250" }, "driveDecreaseBlock": { "$numberLong": "-500" }, "driveDecreasePunish": { "$numberLong": "-2000" }, "superArtGaugeIncrease": { "$numberLong": "300" }, "properties": "High", "miscellaneous": "Can be rapid canceled", "characterId": { "$oid": "64e5bdc63d720ec065fe3997" } }]
  }
];

describe('MoveElem', () => {
  it('renders the platform select buttons', async () => {
    render(<MoveElem char={mockData} />);
    const ps = screen.getByRole('button', { name: /playstation/i });
    expect(ps).toBeInTheDocument();
  });

  it('switches between platforms on click', () => {
    render(<MoveElem char={mockData} />);
    const psButton = screen.getByRole('button', { name: /playstation/i });
    fireEvent.click(psButton);
    expect(psButton).toBeInTheDocument();
  });

  it('switches between platforms on click', () => {
    render(<MoveElem char={mockData} />);
    const xbButton = screen.getByRole('button', { name: /xbox/i });
    fireEvent.click(xbButton);
    expect(xbButton).toBeInTheDocument();
  });

  it('switches between control types on click', () => {
    render(<MoveElem char={mockData} />);
    const modernButton = screen.getByTitle(/i2/i);
    fireEvent.click(modernButton);
    expect(modernButton).toBeInTheDocument();
  });

});
