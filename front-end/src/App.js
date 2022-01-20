import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';

import { Home } from './pages/Home';
import { LastDev } from './pages/LastDev';

import { UserProvider } from './context/UserContext';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/last" element={<LastDev />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
