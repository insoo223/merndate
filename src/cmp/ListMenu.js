import * as React from 'react';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function ListMenu({menu}) {
  return (
    <List>
      {menu.map((text, index) => (
        <Link to={"/" + text}>
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {console.log(text + " clicked")}}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  ); // return
} // ListMenu
