import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicMenu from './BasicMenu';
import FormikCard from './FormikCard';
import DatingCards from './DatingCards';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Admin" {...a11yProps(0)} />
          <Tab label="PAT" {...a11yProps(1)} />
          <Tab label="Smart Farm" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Admin compo
        {/* <BasicMenu/> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        PAT compo
        {/* <FormikCard/> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Smart Farm compo
        {/* <DatingCards/> */}
      </CustomTabPanel>
    </Box>
  );
}
