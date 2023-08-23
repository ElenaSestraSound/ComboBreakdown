import { render, screen } from '@testing-library/react';
import Main from './page';

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  use: jest.fn(() => { })
}));
jest.mock('../../utils/get-characters', () => ({
  getCharacters: () => jest.fn(() => { })
})
);
afterEach(() => {
  jest.clearAllMocks();
});

describe('Main Page', () => {
  it('should render a list', async () => {
    // TODO
  });
});
