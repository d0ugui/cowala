import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import { Container } from './styles';

export function Devs() {
  const { devs: users } = useContext(UserContext);
  
  return (
    <Container>
      {users.map((dev) => (
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
