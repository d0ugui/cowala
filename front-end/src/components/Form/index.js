import { useState, useContext } from 'react';

import Input  from '../Input';
import Button  from '../Button';

import { UserContext } from '../../context/UserContext';

import formatPhone from '../../utils/formatPhone';
import dateFormat from '../../utils/dateFormat';

import { ContentForm, LabelField, GridContent, ButtonGroup } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [employment, setEmployment] = useState('');
  const [phone, setPhone] = useState('');
  const [ip, setMyIp] = useState('');

  const { handleAddDev } = useContext(UserContext);

    
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

    
    const user = { 
      name, 
      employment, 
      phone: phone.replace(/\D/g, ''), 
      ip,
      register: dateFormat(),
    };

    localStorage.setItem(
      'lastUser', 
      JSON.stringify(user)
    );
    handleCleanForm();
    handleAddDev(user);
  }

  function handleCleanForm() {
    setName('');
    setEmployment('');
    setPhone('');
    setMyIp('');
  }

  return (
    <ContentForm>
      <LabelField>
        Nome
        <Input 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </LabelField>

      <GridContent>
        <LabelField>
          Profissão
          <Input 
            value={employment} 
            onChange={(e) => setEmployment(e.target.value)}
          />
        </LabelField>
        <LabelField>
          Celular
          <Input 
            value={phone} 
            onChange={handlePhoneChange} 
            maxLength={15}
          />
        </LabelField>
      </GridContent>

      <GridContent minus>
        <LabelField>
          Meu IP
          <Input
            value={ip}
            disabled
          />
        </LabelField>
        <LabelField btn="true">
          <Button onClick={handleMyIp}>Encontrar IP</Button>
        </LabelField>
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
