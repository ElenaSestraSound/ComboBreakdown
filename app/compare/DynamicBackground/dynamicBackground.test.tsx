import { act, render } from "@testing-library/react";
import { DynamicBackground } from "./DynamicBackground";

describe('Dynamic Background', () => {
  it('should not show any images if no character is selected', async () => {
    await act(async () => {
      render(<DynamicBackground />);
    });
    const leftBackgroundElement = document.querySelector('[data-testid="bg-left"]');
    const rightBackgroundElement = document.querySelector('[data-testid="bg-right"]');

    expect(leftBackgroundElement).not.toBeInTheDocument();
    expect(rightBackgroundElement).not.toBeInTheDocument();
  });
  it('should show character images when a character is selected', async () => {
    const getByTestId = await act(async () => {
      const { getByTestId } = render(<DynamicBackground left="Luke" right="Ken" />);
      return getByTestId;
    });

    const leftBackgroundElement = getByTestId('bg-left');
    const rightBackgroundElement = getByTestId('bg-right');

    const leftStyles = window.getComputedStyle(leftBackgroundElement);
    const rightStyles = window.getComputedStyle(rightBackgroundElement);

    expect(leftStyles.getPropertyValue('background-image')).toContain('/dynamic/left/luke.png');
    expect(rightStyles.getPropertyValue('background-image')).toContain('/dynamic/right/ken.png');
  });
});