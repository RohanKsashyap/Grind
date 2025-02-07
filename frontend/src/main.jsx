import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import LogoutForm from './Forms/logout'
import Form from './Forms/form'
import { AuthProvider } from '../store/contact.auth'


const router = createBrowserRouter(

  createRoutesFromElements(

  <>
<Route path='logout' element={<LogoutForm/>}></Route>,
<Route  path="" element={<Form/>}></Route>

</>  
    
  )




)




createRoot(document.getElementById('root')).render(
  <StrictMode>

<Auth0Provider
    domain="dev-qll72fne03emcauh.us.auth0.com"
    clientId="oLE7prFylzbV68kkacd5iCsfVlnck5Zn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
<AuthProvider>


<RouterProvider router={router}/>

   
   
</AuthProvider>
      
  </Auth0Provider>

  </StrictMode>
)
