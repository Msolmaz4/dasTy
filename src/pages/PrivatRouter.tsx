import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"



const PrivatRouter = () => {
  const {data} = useSelector(state=>state.user)
 

  return data?.token ? <Outlet/> :Navigate('/')
}

export default PrivatRouter


// 