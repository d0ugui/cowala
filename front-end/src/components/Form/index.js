import { useState } from 'react';

import Input from '../Input';
import Button from '../Button';
import formatPhone from '../../utils/formatPhone';

import { Container, Content, GridContent, Field, Buttons} from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [employment, setEmployment] = useState('');
  const [phone, setPhone] = useState('');
  const [ip, setMyIp] = useState('');
  
  function handleMyIp() {
    fetch('https://ip-fast.com/api/ip/?format=json')
      .then(async (response) => {
        const json = await response.json();
        setMyIp(json.ip);
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ name, employment, phone: phone.replace(/\D/g, ''), ip});
  }

  return (
    <Container>
      <Content>
        <label>Nome</label>
        <Input 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <GridContent>
          <Field>
            <label>Profissão</label>
            <Input 
              value={employment} 
              onChange={(e) => setEmployment(e.target.value)}
            />
          </Field>
          <Field>
            <label>Celular</label>
            <Input 
              value={phone} 
              onChange={handlePhoneChange} 
              maxLength={15}
            />
          </Field>
        </GridContent>

        <GridContent minus>
          <Field>
            <label>Meu IP</label>
            <Input
              value={ip}
              disabled
            />
          </Field>
          <Field btn="true">
            <button onClick={handleMyIp}>Encontrar IP</button>
          </Field>
        </GridContent>

        <Buttons>
          <Button onClick={handleSubmit}>
            Salvar
          </Button>
          <Button>Limpar</Button>
        </Buttons>
      </Content>
    </Container>
  );
}
