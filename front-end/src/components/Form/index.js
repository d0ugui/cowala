import { useState } from 'react';

import Input  from '../Input';
import Button  from '../Button';

import formatPhone from '../../utils/formatPhone';

import { ContentForm, Field, GridContent, ButtonGroup } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [employment, setEmployment] = useState('');
  const [phone, setPhone] = useState('');
  const [ip, setMyIp] = useState('');

    
  function handleMyIp(e) {
    e.preventDefault();

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
    localStorage.setItem('lastUser', JSON.stringify({ name, employment, phone: phone.replace(/\D/g, ''), ip}));
    handleCleanForm();
  }

  function handleCleanForm() {
    setName('');
    setEmployment('');
    setPhone('');
    setMyIp('');
  }

  return (
    <ContentForm>
        <Field>
          <label>Nome
            <Input 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </Field>

        <GridContent>
          <Field>
            <label>
              Profissão
              <Input 
                value={employment} 
                onChange={(e) => setEmployment(e.target.value)}
              />
            </label>
          </Field>
          <Field>
            <label>
              Celular
              <Input 
                value={phone} 
                onChange={handlePhoneChange} 
                maxLength={15}
              />
            </label>
          </Field>
        </GridContent>

        <GridContent minus>
          <Field>
            <label>
              Meu IP
              <Input
                value={ip}
                disabled
              />
            </label>
          </Field>
          <Field btn="true">
            <Button onClick={handleMyIp}>Encontrar IP</Button>
          </Field>
        </GridContent>

        <ButtonGroup>
          <Button onClick={handleSubmit}>
            Salvar
          </Button>
          <Button onClick={handleCleanForm}>
            Limpar
          </Button>
        </ButtonGroup>
      </ContentForm>
  );
}
