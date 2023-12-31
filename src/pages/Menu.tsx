import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


const linkt = [
    {
       icon:'r' ,
       title:'Dashboard',
       url:'/stock'
    },
    {
       icon:'a' ,
       title:'Purchases',
       url:'/stock/purchases'
    },
    {
       icon:'c' ,
       title:'Sales',
       url:'/stock/sales'
    },
    {
       icon:'d' ,
       title:'Firms',
       url:'/stock/firms'
    },
    {
       icon:'e' ,
       title:'Brands',
       url:'/stock/brands'
    },
    {
       icon:'f' ,
       title:'Products',
       url:'/stock/products'
    },
]


const Menu = () => {
    const navi = useNavigate()
    const dispatch = useDispatch()
   
  return (
    <div>
  <Toolbar />
      <Divider />
      <List>
        {linkt.map((links, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>navi(`${links.url}`)}>
              <ListItemIcon>
               {links.icon}
              </ListItemIcon>
              <ListItemText primary={links.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />



    </div>
  )
}

export default Menu