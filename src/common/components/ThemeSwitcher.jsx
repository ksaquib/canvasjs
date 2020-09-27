import React from "react";
import Switch from "@material-ui/core/Switch";
import { FormControlLabel } from "@material-ui/core";

const ThemeSwitcher = ({ onChange }) => {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = ({ target: { name, checked } }) => {
    setState({ ...state, [name]: checked });
    onChange(checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={state.checked}
            onChange={handleChange}
            name='checked'
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label='Theme'
      />
    </>
  );
};
export default ThemeSwitcher;
