import { render, screen } from '@testing-library/react';
import { BarMeter } from './BarMeter';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("recharts", () => {
  const OriginalModule = jest.requireActual("recharts");
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: any) => (
      <OriginalModule.ResponsiveContainer width={100} aspect={1}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe('BarMeter', () => {
  it('renders the bar chart container', async () => {
    render(<BarMeter startup={2} active="2-3" recovery={5} />);
    const barTitle = screen.getByText(/Frame Data Bar/i);
    expect(barTitle).toBeInTheDocument();
  });
});
