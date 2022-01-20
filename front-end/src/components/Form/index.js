import { useState, useContext } from 'react';

import Input  from '../Input';
import Button  from '../Button';

import { UserContext } from '../../context/UserContext';

import formatPhone from '../../utils/formatPhone';
import dateFormat from '../../utils/dateFormat';

import { ContentForm, LabelField, GridContent, ButtonGroup } from './styles';
import { Link } from 'react-router-dom';

export function Form() {
  const [name, setName] = useState('');
  const [employment, setEmployment] = useState('');
  const [phone, setPhone] = useState('');
  const [ip, setMyIp] = useState('');

  const { setDevs } = useContext(UserContext);

    
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
    
    setDevs((prevState) => (
      [...prevState, user]
    ))

    handleCleanForm();
  }

  function handleCleanForm() {
    setName('');
    setEmployment('');
    setPhone('');
    setMyIp('');
  }

  return (
    <ContentForm onSubmit={handleSubmit}>
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
        <Button>
          Salvar
        </Button>
        <Button onClick={handleCleanForm}>
          Limpar
        </Button>
      </ButtonGroup>

      <Link to="/last">Registros</Link>
    </ContentForm>
  );
}
