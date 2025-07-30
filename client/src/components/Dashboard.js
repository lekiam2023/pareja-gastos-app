import { useEffect, useState } from "react";

function Dashboard(){

 const [username, setUserName] = useState('Usuario');

  useEffect(() =>{
  //Simulacion obtencion de datos del usuario (Podemos adaptar con un endpoint real)
    const storedUser = JSON.parse(localStorage.getItem('user'));
       if (storedUser?.nombre){
          setUserName(storedUser.nombre);
       }
    },[]);
          

    const handleLogout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';//Redirige al Login
    };

    return(
        <div style={{padding: '20px', fontFamily: 'Arial'}}>
            <h2 style={{color: 'green'}}>Bienvenido al Dashboard, {username}</h2>
            
            <main style={{display:'flex', marginTop:'20px'}}>
                <aside style={{
                    minWidth:'200px',
                    padding: '10px',
                    borderRight:'1px solid #ccc'
                    }}>  
                     <img
                       src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                       alt="Foto del Usuario"
                       style={{width:'100px', borderRadius:'50%', scrollMarginBottom:'10px'}}
                       />
                     <ul style={{listStyle:'none', padding:0}}>
                        <li style={styles.menuItem}>Registrar Gastos</li>
                        <li style={styles.menuItem}>Ver Gastos</li>
                        <li style={styles.menuItem}>Editar Gastos</li>
                        <li style={styles.menuItem}>A-pagar</li>
                     </ul>
                </aside>

                <section style={{padding:'20px', flexGrow: 1}}>
                    <p>Seleccione una opcion del menu para comenzar.</p>
                </section>
            </main>
            <button onClick={handleLogout} style={styles.logoutBtn}>Cerrar Sesíon</button>
        </div>
    );
}

const styles ={
    menuItem:{
        padding:'10px 0',
        borderBottom: '1px solid #eee',
        cursor: 'pointer'
    },
    logoutBtn:{
        marginTop: '30px',
        backgroundColor:'#e74c3c',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px'
    }

};


export default Dashboard;