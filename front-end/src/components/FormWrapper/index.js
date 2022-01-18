import { Form } from '../Form';
import { LastDev } from '../LastDev';
import { Container, Wrapper } from './styles';

export function FormWrapper() {
  return (
    <Container>
      <Wrapper>
        <Form />
      </Wrapper>
      <LastDev />
    </Container>
  );
}
