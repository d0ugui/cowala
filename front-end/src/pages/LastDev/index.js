import { Devs } from '../../components/Devs';

import { Container } from './styles';

export function LastDev() {

  return (
    <Container>
      <h2>Últimos registros</h2>
 
      <div>
        <p>Name</p>
        <p>Employment</p>
        <p>Phone</p>
        <p>Register</p>
      </div>

      <Devs />
    </Container>
  )
}