import logo from './logo.svg';
import './App.css';
import' ./Todo.tsx';

function App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>-To Doリスト-</h1>
          <Todo />
      </header>
    </div>
  );
}

export default App;
