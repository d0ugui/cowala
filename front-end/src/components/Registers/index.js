import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import { Container } from './styles';

export function Registers() {
  const { devs } = useContext(UserContext);
  
  return (
    <Container>
      {console.log(devs)}
      {devs.map((dev) => (
        <li key={Math.random()}>
          <p>{dev.name}</p>
          <p>{dev.employment}</p>
          <p>{dev.phone}</p>
          <p>{dev.register}</p>
        </li>
      ))}
    </Container>
  );
}
