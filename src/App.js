import './App.css';

import { Content } from './components/Container/Content';
import { Header } from './components/Header/Header';
import { Social } from './components/Social/Social';
import { StyledApp } from './AppStyles';
import { Timeline } from './components/Timeline/Timeline';
import { TsParticles } from './components/TsParticles/TsParticles';

function App() {
  return (
    <StyledApp className="App">
      <TsParticles />
      <Header />
      {/* <Content /> */}
      <Timeline />
      <Social />
    </StyledApp>
  );
}

export default App;
