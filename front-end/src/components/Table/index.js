import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Table() {
  return (
    <Container>
      <div>
        <h2>Last records</h2>
      </div>
      <div>
        <p>Name</p>
        <p>Employment</p>
        <p>Phone</p>
        <p>Register</p>
      </div>
    </Container>
  );
}
