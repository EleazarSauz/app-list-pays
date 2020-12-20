import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import Form from './components/form';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
    </div>
  );
}

export default App;
