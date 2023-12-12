import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"



const PrivatRouter = () => {

const data  = useSelector(state=>state.user)
  const navi = useNavigate()
 console.log(data.data?.user?.username,'privarttttttt')
   return data.data?.user?.username ? <Outlet/> : navi('/')

}





export default PrivatRouter


// 