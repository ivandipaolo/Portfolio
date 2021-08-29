import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { DataProvider } from './services/Context';
import { StyledApp } from './AppStyles';
import { BackgroundVideo } from './components/BackgroundVideo/BackgroundVideo'

function App() {
  return (
    <DataProvider>
        <StyledApp className="App">
          <Header/>
          <BackgroundVideo/>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
              <p>ESTE ES EL DIV 3</p>
              <p>ESTE ES EL DIV 1</p>
              <p>ESTE ES EL DIV 2</p>
        </StyledApp>
    </DataProvider>
  );
}

export default App;
