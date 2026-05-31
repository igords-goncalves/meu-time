import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from './Providers/Provider';
import { RouteHandler } from './pages/Login/components/RouterHandler/index';

function App() {
  return (
    <Provider>
      <RouteHandler />
    </Provider>
  );
}

export default App;
