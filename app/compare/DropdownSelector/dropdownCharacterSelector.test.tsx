import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropdownCharacterSelector from "./DropdownCharacterSelector";

const title = 'SELECT A CHARACTER';
const list = [{ name: 'Luke', index: 0 }, { name: 'Ken', index: 1 }];
const mockFn = jest.fn();

describe.only('Dropdown Character Selector', () => {
  it('should show the dropdown list when is clicked', async () => {
    const { getByTestId } = render(
      <DropdownCharacterSelector list={list} title={title} onChangeSelection={mockFn} />
    );

    // Click to open the dropdown menu
    const selector = getByTestId('character-selector');
    userEvent.click(selector);

    // Click to select a character
    await waitFor(() => {
      const selectorList = getByTestId('character-selector-list');
      expect(selectorList).toBeInTheDocument();
    });
  });

  it('should hide the list when a selection is made', async () => {
    const { getByTestId, getByText } = render(
      <DropdownCharacterSelector list={list} title={title} onChangeSelection={mockFn} />
    );

    // Click to open the dropdown menu
    const selector = getByTestId('character-selector');
    userEvent.click(selector);

    // Click to select a character
    await waitFor(() => {
      const characterName = list[0].name.toUpperCase();
      const characterOption = getByText(characterName);
      userEvent.click(characterOption);
    });
    await waitFor(() => {
      const selectorList = document.querySelector('[data-testid="character-selector-list"]');
      expect(selectorList).not.toBeInTheDocument();
    });
  });

  it('should call onChangeSelection when a character is selected', async () => {
    // Act
    const { getByTestId, getByText } = render(
      <DropdownCharacterSelector list={list} title={title} onChangeSelection={mockFn} />
    );

    // Click to open the dropdown menu
    const selector = getByTestId('character-selector');
    userEvent.click(selector);

    // Click to select a character
    await waitFor(() => {
      const characterName = list[0].name.toUpperCase();
      const characterOption = getByText(characterName);
      userEvent.click(characterOption);
    });

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledWith(list[0].index);
    });
  });
});