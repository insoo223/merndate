import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListMenu from './ListMenu';

export default function AncTmpDrw() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const strAnchor = ['Admin', 'PAT', 'SmartFarm', 'CEO'];
  const strCommon = ['All mail', 'Trash', 'Spam'];
  const strMenu = [
    ['Admin1', 'Admin2', 'Admin3', 'Admin4'],
    ['PAT1', 'PAT2', 'PAT3', 'PAT4'],
    ['SF1', 'SF2', 'SF3', 'SF4'],
    ['CEO1', 'CEO2', 'CEO3', 'CEO4'],
  ];

  const list = (anchor) => {
    let idx = strAnchor.findIndex(a => a === anchor);
    return (
      <Box
        sx={{ width: anchor === 'SmartFarm' || anchor === 'CEO' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <ListMenu menu={ strMenu[idx]}/>
        <Divider />
        <ListMenu menu={ strCommon}/>
      </Box>
    ) // return
  }; // list

  return (
    <div>
      {strAnchor.map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            { list(anchor) }
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  ); // return
} // AncTmpDrw
