import { render, screen } from '@testing-library/react';
import NavBar from '../header/header-nav';

let path = '/';
jest.mock('next/navigation', () => ({
  usePathname () { return path; }
}));

describe('Header Nav', () => {
  it('renders the main navigation element', () => {
    render(<NavBar />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  it('renders an active link', () => {
    path = '/';
    render(<NavBar />);
    const link = screen.getByRole('link', {
      name: /main/i
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('active');
  });

  it('renders the compare link', () => {
    path = "/compare";
    render(<NavBar />);
    const link = screen.getByRole('link', {
      name: /compare/i
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('active');
  });

  it('renders the glossary link', () => {
    path = "/glossary";
    render(<NavBar />);
    const link = screen.getByRole('link', {
      name: /glossary/i
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('active');
  });
});
