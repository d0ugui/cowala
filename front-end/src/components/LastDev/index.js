import { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import { Container } from './styles';

export function LastDev() {
  const { devs } = useContext(UserContext);

  return (
    <Container>
      <h2>Últimos registros</h2>

      {devs.length > 0 ? (
        <>  
          <div>
            <p>Name</p>
            <p>Employment</p>
            <p>Phone</p>
            <p>Register</p>
          </div>

          <ul>
            {devs.map((dev) => (
                <li key={Math.random()}>
                  <p>{dev.name}</p>
                  <p>{dev.employment}</p>
                  <p>{dev.phone}</p>
                  <p>{dev.register}</p>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <span>Não há desenvolvedores cadastrados.</span>
      )}
    </Container>
  )
}