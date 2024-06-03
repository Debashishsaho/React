// components/ChmodCal.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { setChecked, setNumberFieldValue, setTextFieldValue } from '../../actions/Chmod/chmodCalculator';

const ChmodCal = () => {
  const dispatch = useDispatch();
  const { checked, numberFieldValue, textFieldValue } = useSelector(state => state.chmodCalculator);

  const handleChange = (event) => {
    const newChecked = {
      ...checked,
      [event.target.name]: event.target.checked,
    };
    dispatch(setChecked(newChecked));
    updatePermissions(newChecked);
  };

  const updatePermissions = (newChecked) => {
    const { ownerRead, ownerWrite, ownerExecute, groupRead, groupWrite, groupExecute, othersRead, othersWrite, othersExecute } = newChecked;

    const owner = calculatePermission(ownerRead, ownerWrite, ownerExecute);
    const group = calculatePermission(groupRead, groupWrite, groupExecute);
    const others = calculatePermission(othersRead, othersWrite, othersExecute);

    const number = `${owner}${group}${others}`;
    const text = `${createPermissionString(ownerRead, ownerWrite, ownerExecute)}${createPermissionString(groupRead, groupWrite, groupExecute)}${createPermissionString(othersRead, othersWrite, othersExecute)}`;

    dispatch(setNumberFieldValue(number));
    dispatch(setTextFieldValue(text));
  };

  // Calculate permission value (4 for read, 2 for write, 1 for execute)
  const calculatePermission = (read, write, execute) => {
    return (read? 4 : 0) + (write? 2 : 0) + (execute? 1 : 0);
  };

  // Create permission string (r for read, w for write, x for execute, - for no permission)
  const createPermissionString = (read, write, execute) => {
    return `${read? 'r' : '-'}${write? 'w' : '-'}${execute? 'x' : '-'}`;
  };

  useEffect(() => {
    updatePermissions(checked);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" p={2} gap={2}>
        <Typography variant="h6" align="center">Owner</Typography>
        <FormGroup className="ownerPermission" row>
          <FormControlLabel control={<Checkbox name="ownerRead" checked={checked.ownerRead} onChange={handleChange} />} label="Read" />
          <FormControlLabel control={<Checkbox name="ownerWrite" checked={checked.ownerWrite} onChange={handleChange} />} label="Write" />
          <FormControlLabel control={<Checkbox name="ownerExecute" checked={checked.ownerExecute} onChange={handleChange} />} label="Execute" />
        </FormGroup>

        <Typography variant="h6" align="center">Group</Typography>
        <FormGroup className="groupPermission" row>
          <FormControlLabel control={<Checkbox name="groupRead" checked={checked.groupRead} onChange={handleChange} />} label="Read" />
          <FormControlLabel control={<Checkbox name="groupWrite" checked={checked.groupWrite} onChange={handleChange} />} label="Write" />
          <FormControlLabel control={<Checkbox name="groupExecute" checked={checked.groupExecute} onChange={handleChange} />} label="Execute" />
        </FormGroup>

        <Typography variant="h6" align="center">Others</Typography>
        <FormGroup className="otherPermission" row>
          <FormControlLabel control={<Checkbox name="othersRead" checked={checked.othersRead} onChange={handleChange} />} label="Read" />
          <FormControlLabel control={<Checkbox name="othersWrite" checked={checked.othersWrite} onChange={handleChange} />} label="Write" />
          <FormControlLabel control={<Checkbox name="othersExecute" checked={checked.othersExecute} onChange={handleChange} />} label="Execute" />
        </FormGroup>

        <TextField
          id="numberPermission"
          label="Numeric Permission"
          value={numberFieldValue}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          id="textPermission"
          label="Text Permission"
          value={textFieldValue}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
        />
      </Box>
    </Container>
  );
};

export default ChmodCal;
