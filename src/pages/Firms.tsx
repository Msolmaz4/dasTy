import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { alleFirma } from "../redux/firmaSlice"
import FirmaCard from "./FirmaCard"

const Firms = () => {
  const {data} =useSelector(state=>state.user)
  const dispatch = useDispatch()
const {veri} = useSelector(state=>state.firma)
console.log(veri)

useEffect(()=>{

  dispatch(alleFirma(data.token))
},[dispatch])



  return (
    <div>
      <div style={{display:'flex',justifyContent:'center'}}> Firms</div>
      
      <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'10px'}}>
        {veri?.data.map((item)=>(
        <FirmaCard item= {item}/>
       ))}
      </div>
       

    </div>
  )
}

export default Firms