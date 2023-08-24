import { render, screen } from '@testing-library/react';
import Elem from './elem';

const mockData =
  { "_id": { "$oid": "64e5bdc63d720ec065fe3998" }, "name": "Standing Light Punch", "type": "abnormal", "classic": "LP", "modern": "L", "startup": { "$numberLong": "4" }, "active": "4-5", "missRecovery": { "$numberLong": "9" }, "hitStunRecovery": { "$numberLong": "4" }, "blockStunRecovery": { "$numberLong": "-1" }, "cancelable": "C", "damage": { "$numberLong": "300" }, "scaling": "Starter scaling 10%", "driveIncreaseHit": { "$numberLong": "250" }, "driveDecreaseBlock": { "$numberLong": "-500" }, "driveDecreasePunish": { "$numberLong": "-2000" }, "superArtGaugeIncrease": { "$numberLong": "300" }, "properties": "High", "miscellaneous": "Can be rapid canceled", "characterId": { "$oid": "64e5bdc63d720ec065fe3997" } };
const mockNormal =
  { "_id": { "$oid": "64e5bdc63d720ec065fe3998" }, "name": "Light Punch", "type": "normal" };
const scrapperMock = {
  "id": "64e5bdd03d720ec065fe4023",
  "name": "Scrapper",
  "type": "throw",
  "image": null,
  "classic": "4+LPLK",
  "modern": "4+LM",
};

const uppercutMock = {
  "id": "64e5bdd03d720ec065fe4019",
  "name": "RisingUppercut",
  "type": "special",
  "image": null,
  "classic": "623+LP",
  "modern": "623+L",
};

describe('Elem', () => {
  it('renders the move controls', async () => {
    render(<Elem
      move={mockData}
      controlGen={'classic'}
      controlMake={'cap'} />);
    const ps = screen.getByText('Standing Light Punch');
    expect(ps).toBeInTheDocument();
  });

  it('renders the modern move controls', async () => {
    render(<Elem
      move={mockData}
      controlGen={'modern'}
      controlMake={'cap'} />);
    const ps = screen.getByText('Standing Light Punch');
    expect(ps).toBeInTheDocument();
  });

  it('renders the scrapper controls', async () => {
    render(<Elem
      move={scrapperMock}
      controlGen={'modern'}
      controlMake={'cap'} />);
    const ps = screen.getByText('Scrapper');
    expect(ps).toBeInTheDocument();
  });

  it('renders the uppercut controls', async () => {
    render(<Elem
      move={uppercutMock}
      controlGen={'classic'}
      controlMake={'cap'} />);
    const ps = screen.getByText('RisingUppercut');
    expect(ps).toBeInTheDocument();
  });
});

describe('Elem', () => {
  it('does not render normal type move', async () => {
    render(<Elem
      move={mockNormal}
      controlGen={'classic'}
      controlMake={'cap'} />);
    const ps = screen.queryByText('Light Punch');
    expect(ps).toBeNull();
  });
});
