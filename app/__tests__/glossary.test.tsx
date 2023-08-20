import { render, screen, fireEvent } from '@testing-library/react';
import Glossary from '../glossary/page';

describe('Glossary Page', () => {
  it('renders search label', () => {
    render(<Glossary />);
    const searchLabel = screen.getByText(/Search Glossary/i);
    expect(searchLabel).toBeInTheDocument();
  });

  it('renders glossary list item', () => {
    render(<Glossary />);
    const definition = screen.getByText(/Smash Bros.-specific/i);
    expect(definition).toBeInTheDocument();
  });

  it('filters by letter', () => {
    render(<Glossary />);
    const letterFilter = screen.getByRole('link', {
      name: /b/i
    });
    fireEvent.click(letterFilter);
    const definition = screen.getByText(/Babality/i);
    expect(definition).toBeInTheDocument();
  });

  it('filters by #', () => {
    render(<Glossary />);
    const letterFilter = screen.getByRole('link', {
      name: /#/i
    });
    fireEvent.click(letterFilter);
    const definition = screen.getByText(/09ers/i);
    expect(definition).toBeInTheDocument();
  });

  it('filters by search input', () => {
    render(<Glossary />);
    const searchInput = screen.getByRole('textbox', { name: /search glossary/i });
    fireEvent.change(searchInput, { target: { value: 'chicken' } });
    const definition = screen.getAllByText(/Chicken Block/i);
    expect(definition[0]).toBeInTheDocument();
  });

  it('resets filter by letter', () => {
    render(<Glossary />);
    const letterFilter = screen.getByRole('link', {
      name: /c/i
    });
    fireEvent.click(letterFilter);
    fireEvent.click(letterFilter);
    const definition = screen.getByText(/Smash Bros.-specific/i);
    expect(definition).toBeInTheDocument();
  });

});
