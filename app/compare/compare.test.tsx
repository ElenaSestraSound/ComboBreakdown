import { act, render, screen } from '@testing-library/react';
import Compare from './Compare';
import { characters } from './mocks/mockCharacters';

describe('Compare Page', () => {
  it('should render 2 character selectors', async () => {
    await act(async () => {
      render(<Compare characters={characters} />);
    });
    const compareText = screen.getAllByText(/SELECT A CHARACTER/i);
    expect(compareText.length).toBe(2);
  });
});
