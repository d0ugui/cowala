import { useState, useContext } from 'react';

import Input  from '../Input';
import Button  from '../Button';

import { UserContext } from '../../context/UserContext';

import formatPhone from '../../utils/formatPhone';
import dateFormat from '../../utils/dateFormat';
import delay from '../../utils/delay';

import { ContentForm, LabelField, GridContent, ButtonGroup } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [employment, setEmployment] = useState('');
  const [phone, setPhone] = useState('');
  const [ip, setMyIp] = useState('');

  const { devs, setDevs, setIsLoading } = useContext(UserContext);

    
  function handleMyIp(e) {
    e.preventDefault();

    fetch('https://ip-fast.com/api/ip/?format=json')
      .then(async (response) => {
        const json = await response.json();
        setMyIp(json.ip);
      })
      .catch((err) => {
        console.log('erro', err);
      })
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    await delay(2000);

    const user = { 
      name, 
      employment, 
      phone: phone.replace(/\D/g, ''), 
      ip,
      register: dateFormat(),
    };
    
    setDevs((prevState) => (
      [...prevState, user]
    ))

    const prevDevs = [...devs, user];

    localStorage.setItem(
      'localDevs', 
      JSON.stringify(prevDevs)
    );

    setIsLoading(false);
    handleCleanForm();
  }

  async function handleCleanForm() {
    setName('');
    setEmployment('');
    setPhone('');
    setMyIp('');

    await delay(2000);
  }

  return (
    <ContentForm onSubmit={handleSubmit}>
      <LabelField>
        Name
        <Input 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </LabelField>

      <GridContent>
        <LabelField>
          Employment
          <Input 
            value={employment} 
            onChange={(e) => setEmployment(e.target.value)}
          />
        </LabelField>
        <LabelField>
          Phone
          <Input 
            value={phone} 
            onChange={handlePhoneChange} 
            maxLength={15}
          />
        </LabelField>
      </GridContent>

      <GridContent minus>
        <LabelField>
          IP Address
          <Input
            value={ip}
            disabled
          />
        </LabelField>
        <LabelField btn="true">
          <Button onClick={handleMyIp}>What is my IP?</Button>
        </LabelField>
      </GridContent>

      <ButtonGroup>
        <Button>
          Save
        </Button>
        <Button onClick={handleCleanForm}>
          Clean
        </Button>
      </ButtonGroup>
    </ContentForm>
  );
}
