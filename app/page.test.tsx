import { render } from '@testing-library/react';
import Page from './page';
import React from 'react';

jest.mock("./main/page");

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  cache: jest.fn(() => { }),
  use: jest.fn(() => { })
}));

describe('App/page', () => {
  it('should render', async () => {
    render(<Page />);
  });

});
