function Dashboard(){
    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.href = '/login';//Redirige al Login
    };
    return(
        <div>
            <h2 style={{color: 'red'}}>Bienvenido al Dashboard</h2>
            
            <main>
                <sidebar style={{display:'flex'}}>
                    <img src="/" alt="FotoUser" />
                    <ul>
                        <li>Opcion1</li>
                        <li>Opcion2</li>
                        <li>Opcion3</li>
                        <li>Opcion4</li>
                    </ul>
                </sidebar>
            </main>
            
            
            
            <button onClick={handleLogout}>Cerrar Sesíon</button>

        </div>
    );
}

export default Dashboard;