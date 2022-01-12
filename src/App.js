import './App.css';

import { Content } from './components/Container/Content';
import { Header } from './components/Header/Header';
import { Social } from './components/Social/Social';
import { StyledApp } from './AppStyles';
import Tags from './components/TagCloud/Tags';

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Content />
      <Social />
    </StyledApp>
  );
}

export default App;
