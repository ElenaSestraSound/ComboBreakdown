import { render, screen } from '@testing-library/react';
import Glossary from '../glossary/page';

describe('Glossary Page', () => {
  it('renders hello', () => {
    render(<Glossary />);
    const glossaryText = screen.getByText(/Glossary/i);
    expect(glossaryText).toBeInTheDocument();
  });
});
