import LoginForm from '../components/LoginForm';

function Login(){
    return(
        <div style={{maxWidth:'400px', margin:'auto'}}>
            <h1>Iniciar Sesión</h1>
            <LoginForm />
        </div>  
    );
}

export default Login;