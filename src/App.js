import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Chmod from './containers/Chmod';
import Crontab from './containers/Crontab';
import Timestamp from './containers/Timestamp';
import Password from './containers/Password';
import store from './store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Chmod />} />
          <Route path="/chmod_calculator" element={<Chmod />} />
          <Route path="/crontab_generator" element={<Crontab />} />
          <Route path="/unix_timestamp_converter" element={<Timestamp />} />
          <Route path="/password_generator" element={<Password />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
