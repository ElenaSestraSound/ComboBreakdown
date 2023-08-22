import DropdownSelector from "./DropdownSelector";
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const title = 'SELECT A CHARACTER';
const list = [{ name: 'Luke', index: 0 }, { name: 'Ken', index: 1 }];
const mockFn = jest.fn();

describe('Dropdown Selector', () => {
  it('should show the dropdown list when is clicked', async () => {
    const { getByTestId, getByText } = render(
      <DropdownSelector list={list} title={title} onChangeSelection={mockFn} />
    );

    // Click to open the dropdown menu
    const selector = getByTestId('selector');
    userEvent.click(selector);

    // Click to select a character
    await waitFor(() => {
      const selectorList = getByTestId('selector-list');
      expect(selectorList).toBeInTheDocument();
    });
  });

  it('should hide the list when a selection is made', async () => {
    const { getByTestId, getByText } = render(
      <DropdownSelector list={list} title={title} onChangeSelection={mockFn} />
    );

    // Click to open the dropdown menu
    const selector = getByTestId('selector');
    userEvent.click(selector);

    // Click to select a character
    await waitFor(() => {
      const characterName = list[0].name;
      const characterOption = getByText(characterName);
      userEvent.click(characterOption);
    });
    await waitFor(() => {
      const selectorList = document.querySelector('[data-testid="selector-list"]');
      expect(selectorList).not.toBeInTheDocument();
    });
  });

  it('should call onChangeSelection when a character is selected', async () => {
    // Act
    const { getByTestId, getByText } = render(
      <DropdownSelector list={list} title={title} onChangeSelection={mockFn} />
    );

    // Click to open the dropdown menu
    const selector = getByTestId('selector');
    userEvent.click(selector);

    // Click to select a character
    await waitFor(() => {
      const characterName = list[0].name;
      const characterOption = getByText(characterName);
      userEvent.click(characterOption);
    });

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledWith(list[0].index);
    });
  });
});