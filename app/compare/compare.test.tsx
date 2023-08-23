import { act, render, screen } from '@testing-library/react';
import Compare from './Compare';
import { characters } from './__mocks__/characters.mock';

describe('Compare', () => {
  it('should render 2 character selectors', async () => {
    await act(async () => {
      render(<Compare characters={characters} />);
    });
    const compareText = screen.getAllByText(/SELECT A CHARACTER/i);
    expect(compareText.length).toBe(2);
  });
  it('should render the VS image', async () => {
    const altText = 'An image of VS letters';
    const src = '/common/vs.png';
    await act(async () => {
      render(<Compare characters={characters} />);
    });
    const imageElement = screen.getByAltText(altText);
    expect(imageElement).toBeInTheDocument();
  });
});
