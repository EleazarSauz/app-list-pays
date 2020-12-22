import logo from './logo.svg';
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <div className="flex flex-col justify-center items-center">
        <Switch>
          <Route path="/add-pay">
            <Form />
          </Route>s
          <Route path="/list-pay">
            <TablePays/>
          </Route>
          <Route path="/">
            <TablePays />
          </Route>
        </Switch>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <p className="leading-normal my-5">
            Made with ❤️
              <br />
              By Eleazar Saúz 🙋‍♂️
          </p>
        </div>
      </div>
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