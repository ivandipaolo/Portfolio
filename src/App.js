import './App.css';

import { Content } from './components/Container/Content';
import { Header } from './components/Header/Header';
import { Social } from './components/Social/Social';
import { StyledApp } from './AppStyles';
import { TsParticles } from './components/TsParticles/TsParticles';

function App() {
  return (
    <StyledApp className="App">
      <TsParticles />
      <Header />
      <Content />
      <Social />
    </StyledApp>
  );
}

export default App;
