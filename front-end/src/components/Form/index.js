import { useState, useContext } from 'react';

import Input  from '../Input';
import Button  from '../Button';

import { UserContext } from '../../context/UserContext';

import formatPhone from '../../utils/formatPhone';
import dateFormat from '../../utils/dateFormat';
import delay from '../../utils/delay';

import { ContentForm, LabelField, GridContent, ButtonGroup } from './styles';
import { FormGroup } from '../FormGroup';

export function Form() {
  const [name, setName] = useState('');
  const [employment, setEmployment] = useState('');
  const [phone, setPhone] = useState('');
  const [ip, setMyIp] = useState('');
  const [errors, setErrors] = useState([]);

  const { devs, setDevs, setIsLoading } = useContext(UserContext);

  function handleNameChange(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório!'},
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
  }

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

  async function handleSubmit(e) {
    e.preventDefault();

    if (errors.length > 0 || name === '') {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório!'},
      ]);
      return;
    }

    setIsLoading(true);

    await delay(1000);

    const user = { 
      name, 
      employment: employment || '----', 
      phone: phone.replace(/\D/g, '') || '----', 
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

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return (
    <ContentForm onSubmit={handleSubmit}>
      <LabelField>
        Name (*)
       <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input 
            error={getErrorMessageByFieldName('name')}
            value={name}
            onChange={handleNameChange}
          />
       </FormGroup>
      </LabelField>

      <GridContent>
        <LabelField>
          Employment
          <FormGroup>
            <Input 
              value={employment} 
              onChange={(e) => setEmployment(e.target.value)}
            />
          </FormGroup>
        </LabelField>

        <LabelField>
          Phone
          <FormGroup>
            <Input 
              value={phone} 
              onChange={handlePhoneChange} 
              maxLength={15}
            />
          </FormGroup>
        </LabelField>
      </GridContent>

      <GridContent minus>
        <LabelField>
          IP Address
          <FormGroup error={getErrorMessageByFieldName('ip')}>
            <Input
              error={getErrorMessageByFieldName('ip')}
              value={ip}
              disabled
            />
          </FormGroup>
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
