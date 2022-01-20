import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import { Table } from "../Table";

import { Container } from './styles';

export function LastDev() {
  const { devs } = useContext(UserContext);
  const lastDev = devs[devs.length -1];

  return (
    
    <Container>
      {lastDev && (
        
        <>
          <Table />
          <ul>
            <li>
              <p>{lastDev.name}</p>
              <p>{lastDev.employment}</p>
              <p>{lastDev.phone}</p>
              <p>{lastDev.register}</p>
            </li>
          </ul>
          <Link to="/registers"> Clique aqui para ver todos os Registros!</Link>
        </>
      )}
    </Container>
  );
}
