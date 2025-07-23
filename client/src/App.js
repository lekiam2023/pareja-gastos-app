
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
   const [showLogin, setShowLogin] = useState(true);
  return (
    <div style={{maxWidth: '400px', margin: 'auto'}}>

      <h1>{showLogin ? 'Iniciar Sesión': 'Registrarse'}</h1>

      {showLogin ? <LoginForm /> : <RegisterForm />}
      
      <button onClick={() => setShowLogin(!showLogin)} style={{ marginTop:'20px' }}>
         {showLogin ? 'No tienes cuenta? Registrate' : 'Ya ¿Tienes cuenta Inicia Sesión?'}
      </button>
    </div>
  );
}

export default App;
