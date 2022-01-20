import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Cowala Software" />
      </Link>
    </Container>
  );
}
