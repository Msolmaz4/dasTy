import Sigin from './pages/Sigin'
import Signup from './pages/Signup'
import Eroro from './pages/Eroro'
import Stock from './pages/Stock';




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
        element:   <Stock/> 
    }
  
  

    
]

export default routes;