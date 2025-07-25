function Dashboard(){
    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.href = '/login';//Redirige al Login
    };
    return(
        <div>
            <h2>Bienvenido al Dashboard</h2>
            <button onClick={handleLogout}>Cerrar Sesíon</button>
        </div>
    );
}

export default Dashboard;