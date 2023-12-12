import Sigin from './pages/Sigin'
import Signup from './pages/Signup'
import Eroro from './pages/Eroro'
import Stock from './pages/Stock';
import { useSelector } from 'react-redux';
import { useNavigate, useRoutes } from 'react-router';


const Routes = ()=>{
    const data  = useSelector(state=>state.user)
    const navi = useNavigate()
   console.log(data.data?.user?.username,'privarttttttt')

const routes = [
    {
        path:'/',
        element:<Sigin/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'*',
        element:<Eroro/>
    },
    {
        path: '/stock',
            element: data.data?.user?.username ? <Stock/> : navi ('/') ,
    }
  
  
  
    
]
   const router = useRoutes(routes)
    return router

}



export default Routes;