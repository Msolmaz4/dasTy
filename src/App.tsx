
import { useRoutes } from "react-router-dom"


import useRouten from "./hooks/useRouter.jsx"

const App = () => {
  const { routes: routedData } = useRouten(); 
  return useRoutes(routedData);
  
}

export default App