import { render, screen } from '@testing-library/react';
import Glossary from '../glossary/page';

describe('Glossary Page', () => {
  it('renders search label', () => {
    render(<Glossary />);
    const searchLabel = screen.getByText(/Search Glossary/i);
    expect(searchLabel).toBeInTheDocument();
  });
});
