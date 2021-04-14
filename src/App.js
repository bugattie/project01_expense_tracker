import './App.css';
import { ActionSummary } from './components/ActionSummary';

import { Balance } from './components/Balance';
import {Header} from './components/Header'


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <ActionSummary/>
      </div>
    </div>
  );
}

export default App;
