import './App.css';
import AllPages from './pages/AllPages';
import { RoutesPage } from '../routes';

function App() {
  const isLogin = new URLSearchParams(window.location.search)
    if (isLogin.get('status') === 'home') {
      return (<AllPages />)
    }
  return (
    <div>
      <RoutesPage />
      
    </div>
  );
}

export default App;
