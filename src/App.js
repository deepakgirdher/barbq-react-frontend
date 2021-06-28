import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import PosPage from './pages/pos-page/pos-page.component';
import AdminPage from './pages/admin-page/admin-page.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PosPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
