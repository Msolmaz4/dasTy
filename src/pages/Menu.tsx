import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';


const Menu = () => {
  return (
    <div>
  <Toolbar />
      <Divider />
      <List>
        {['Dashboard', 'Purchases', 'Sales', 'Firms','Brands','Products'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index == 1 &&' y '}
                {index == 2 &&  'a'}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />



    </div>
  )
}

export default Menu