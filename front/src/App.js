import './App.css';
import './tailwind.css';
import Form from './components/form';
import NavBar from './components/navbar';
import TablePays from './components/tablePays';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/add-payment">
          <Form />
        </Route>s
        <Route path="/list-payment">
          <TablePays/>
        </Route>
        <Route path="/">
          <TablePays />
        </Route>
      </Switch>

      <footer className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <p className="leading-normal my-5">
          Made with ❤️
            <br />
            By Eleazar Saúz 🙋‍♂️
        </p>
      </footer>
    </Router>
  );
}

// function App() {
//   return (
//     <>  
//         <img src={logo} className="App-logo" alt="logo" />
//         <Form/>
//     </>
//   );
// }