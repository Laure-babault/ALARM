import { render, screen } from '@testing-library/react';
import Accueil from '../pages/Accueil';

test('Accueil is working', () => {
  render(<Accueil />);
//  const linkElement = screen.getByText(/learn react/i);
 // expect(linkElement).toBeInTheDocument();
});
