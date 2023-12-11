import Sigin from './pages/Sigin'
import Signup from './pages/Signup'


import Eroro from './pages/Eroro'


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
    
      
    }

    
]

export default routes;