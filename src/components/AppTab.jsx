import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Home from "./Home";
import LiveChart from "./LiveChart";
import ThemeSwitcher from "../common/components/ThemeSwitcher";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AppTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [theme, setTheme] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSwitchChange = (val) => {
    setTheme(val);
  };
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} className='app-tab'>
          <Tab label='Home' {...a11yProps(0)} />
          <Tab label='Live Charts' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home theme={theme} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LiveChart theme={theme} />
      </TabPanel>
      <ThemeSwitcher onChange={handleSwitchChange} />
    </div>
  );
};
export default AppTab;
