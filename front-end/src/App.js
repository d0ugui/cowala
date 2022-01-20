import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';

import { Home } from './pages/Home';
import { ListDevs } from './pages/ListDevs';

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
          <Route path="/registers" element={<ListDevs />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
