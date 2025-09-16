import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from '../src/pages/Dashboard';
import GastosPage from './pages/GastosPage';
import PrivateRoute from '../src/routes/PrivateRoute';


function App() {
  return (
      <Router>
         <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
            <Route path="/gastos" element={<PrivateRoute> <GastosPage /> </PrivateRoute>}/>
         </Routes>
      </Router> 
  );
}

export default App;
