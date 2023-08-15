
import './App.css';
import { AuthProvider } from './context/auth';
import RoutesApp from './rotues';









function App() {
  return (
    <AuthProvider>
      <RoutesApp />

    </AuthProvider>


  );
}

export default App;
