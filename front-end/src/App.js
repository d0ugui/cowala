import { Header } from './components/Header';
import { FormWrapper } from './components/FormWrapper';

import { UserProvider } from './context/UserContext';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Header />
      <FormWrapper />
    </UserProvider>
  );
}

export default App;
