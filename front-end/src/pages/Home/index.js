import { useEffect, useContext } from 'react';

import { Form } from '../../components/Form';
import { LastDev } from '../../components/LastDev';
import { Loader } from '../../components/Loader';

import delay from '../../utils/delay';

import { UserContext } from '../../context/UserContext';

import { Container, Wrapper} from './styles';

export function Home() {
  const { isLoading, setIsLoading, setDevs } = useContext(UserContext);
  
  useEffect(() => {
    async function initLoading() {
      const localDevs = JSON.parse(localStorage.getItem('localDevs'));
      setIsLoading(true);

      await delay(1000);

      if (!localDevs) {
        setIsLoading(false);
        return
      }

      setDevs(localDevs)

      setIsLoading(false);
    }

    initLoading();
  }, [])

  return (
    <Container>
      {isLoading && <Loader />}
      <Wrapper>
        <Form />
      </Wrapper>
      <LastDev />
    </Container>
  );
}
