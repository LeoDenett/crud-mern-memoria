import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import Home from './app/pages/Home';
import AddAnime from './app/pages/AddAnime';
import GlobalStyle from './app/styles/GlobalStyle';


//Alert
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
        <GlobalStyle/>
        <Header/>
          <Switch>
            <Route component={AddAnime} path="/addToWatch"/>
            <Route component={Home} path="/"/>
          </Switch>
          <ToastContainer autoClose={4000} />
        <Footer/>
    </Router>
  );
}

export default App;