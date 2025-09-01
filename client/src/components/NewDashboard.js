
import Card from "./CardView";
function Dashboard2(){





    return(


     <>
     <div className="flex  flex-row">
    
    <aside className="w-64 h-screen lg:col-span-3 bg-sky-50   ">
        <div  className="relative overflow-hidden">

          <div   
            className="inset-y-0 absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0"  >
            <div className="absolute inset-0 flex">
              <div className="h-full w-1/2" ></div>
              <div className="h-full w-1/2" ></div> 
            </div> 
            <div className="relative flex justify-center"> 
              <svg className="flex-shrink-0" width="1750" height="220" viewBox="0 0 1750 308"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1"></path>
                <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c"></path>
                <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b"></path>
                <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76"></path>
              </svg>
            </div>
            
          </div>
          <header className="relative pb-4">
            <div className="max-w-7xl">
              <div className="profile-container mx-auto mt-5 mb-8 p-2 background-image: url(https://erp.psit.ac.in/assets/img/Fimages/1709.jpg);"></div>
              <h1  className="text-xl font-bold tracking-tight text-white text-center truncate">Maikel Lopez</h1>
              <p   className="text-sm font-bold tracking-tight text-white text-center ">CouplesAccounts</p>
            </div>
          </header> 
        </div>
        <nav className="space-y-1">
          
          <div>
              <label for="" className="text-gray-700 px-3 py-2 flex items-center text-sm font-medium">Main</label>
              <a href="#"
              className="bg-sky-100 border-sky-600 text-sky-700 hover:bg-sky-200 hover:text-sky-700 group border-l-4 px-3 py-2 flex items-center text-sm font-medium" >
                <svg className="text-sky-500 group-hover:text-sky-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z">
                  </path>
                </svg>
                <span className="truncate">Profile</span>
                <svg className="ml-auto w-5 h-5" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <div className="bg-white pl-8">
                <ul className="py-4">
                  <li> 
                    <a href="#" className="text-sky-700 px-3  py-1 flex items-center text-sm font-medium">
                      <svg className=" w-2 h-2 mr-2" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Consultar  Gastos
                    </a>
                  </li>
                  <li> 
                    
                    <a href="#" className="text-gray-600 px-3 py-1 flex items-center text-sm font-medium">
                    <svg className=" w-2 h-2 mr-2" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Modificar Gastos
                    </a> 
                  </li>
                  <li> 
                    <a href="#" className="text-gray-600 px-3 py-1 flex items-center text-sm font-medium">
                      <svg className=" w-2 h-2 mr-2" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Introducir Gastos
                    </a> 
                  </li>
                  <li> 
                    <a href="#" className="text-gray-600 px-3 py-1 flex items-center text-sm font-medium">
                      <svg className=" w-2 h-2 mr-2" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      A-Pagar
                      </a> 
                  </li>
                </ul>
            </div>
          </div>


  

          <a href="#"
            className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
            x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;">
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
              x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495">
              </path>
            </svg>
            <span className="truncate">Account</span>
          </a>

          <a href="#"
            className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
            x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;">
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
              x-description="Heroicon name: outline/key" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z">
              </path>
            </svg>
            <span className="truncate">Password</span>
          </a>

          <a href="#"
            className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
            x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;">
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
              x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
              </path>
            </svg>
            <span className="truncate">Notifications</span>
          </a>

          <a href="#"
            className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
            x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;">
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
              x-description="Heroicon name: outline/credit-card" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z">
              </path>
            </svg>
            <span className="truncate">Billing</span>
          </a>

          <a href="#"
            className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
            x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;">
            <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
              x-description="Heroicon name: outline/squares-plus" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z">
              </path>
            </svg>
            <span className="truncate">Integrations</span>
          </a>

        </nav>
    </aside>
    <div className="p-4 ">
      <Card />
    </div>
 
 </div>
     
     
     
     
     </>


    )
}

export default Dashboard2;