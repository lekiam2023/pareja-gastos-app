import { useEffect } from 'react';
import API from './services/api';

function App() {
  useEffect(()=>{
    API.get('/ping')
      .then(res =>{
        console.log('Conexion al backend exitosa', res.data);
      })
      .catch(err =>{
            console.log('Error al conectar al backend', err);
      });
  },[]);
  return (
    <div >
      <h1>Conectado a React </h1>
    </div>
  );
}

export default App;
