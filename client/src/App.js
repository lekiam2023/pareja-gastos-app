import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
      <Router>
         <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
         </Routes>
      </Router> 
  );
}

export default App;
