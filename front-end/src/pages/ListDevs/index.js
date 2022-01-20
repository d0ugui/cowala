import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import { Registers } from '../../components/Registers';

import { Container } from './styles';
import { Table } from '../../components/Table';

export function ListDevs() {
  const { devs } = useContext(UserContext);

  return (
    <Container>
      {devs.length > 0 ? (
        <>
          <Table />
          <Registers />
        </>
      ) : (
        <span>Don't exists records!</span>
      )}
    </Container>
  )
}