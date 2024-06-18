import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Box,
  Typography,
  Container,
  Tooltip,
  Button,
} from "@mui/material";
import { setChecked, setNumberFieldValue, setTextFieldValue } from '../../actions/Chmod/chmodCalculator';
import { isNumberValid, isTextValid, chmodNumberToString, chmodStringToCheckboxes, checkboxToChmodNumber } from '../../utils/validators/chmodValidator';

const ChmodCal = () => {
  const dispatch = useDispatch();
  const { checked, numberFieldValue, textFieldValue } = useSelector(state => state.chmodCalculator);

  const [numberError, setNumberError] = useState('');
  const [textError, setTextError] = useState('');

  const handleChange = (event) => {
    const newChecked = {
      ...checked,
      [event.target.name]: event.target.checked,
    };
    dispatch(setChecked(newChecked));
    updatePermissions(newChecked);
  };

  const handleNumberChange = (event) => {
    const value = event.target.value;
    if (isNumberValid(value)) {
      if (value.length === 3) {
        const newCheckboxState = chmodNumberToString(value);
        dispatch(setChecked(chmodStringToCheckboxes(newCheckboxState)));
        dispatch(setTextFieldValue(newCheckboxState));
      }
      setNumberError('');
      dispatch(setNumberFieldValue(value));
    } else {
      setNumberError('Invalid number. Must be 0-7 and up to 3 digits.');
    }
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    if (isTextValid(value)) {
      if (value.length === 9) {
        const newCheckboxState = chmodStringToCheckboxes(value);
        dispatch(setChecked(newCheckboxState));
        dispatch(setNumberFieldValue(checkboxToChmodNumber(newCheckboxState)));
      }
      setTextError('');
      dispatch(setTextFieldValue(value));
    } else {
      setTextError('Invalid format. Must be rwx or - pattern.');
    }
  };

  const updatePermissions = (newChecked) => {
    const number = checkboxToChmodNumber(newChecked);
    const text = chmodNumberToString(number);
    dispatch(setNumberFieldValue(number));
    dispatch(setTextFieldValue(text));
  };

  const clearFields = () => {
    const defaultChecked = {
      ownerRead: false,
      ownerWrite: false,
      ownerExecute: false,
      groupRead: false,
      groupWrite: false,
      groupExecute: false,
      othersRead: false,
      othersWrite: false,
      othersExecute: false,
    };
    dispatch(setChecked(defaultChecked));
    dispatch(setNumberFieldValue('000'));
    dispatch(setTextFieldValue('---------'));
    setNumberError('');
    setTextError('');
  };

  useEffect(() => {
    updatePermissions(checked);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" p={2} gap={2}>
        <Typography variant="h6" align="center">Owner</Typography>
        <FormGroup className="ownerPermission" row>
          {['Read', 'Write', 'Execute'].map((perm, index) => (
            <Tooltip key={perm} title={`Owner ${perm}`}>
              <FormControlLabel control={<Checkbox name={`owner${perm}`} checked={checked[`owner${perm}`]} onChange={handleChange} />} label={perm} />
            </Tooltip>
          ))}
        </FormGroup>

        <Typography variant="h6" align="center">Group</Typography>
        <FormGroup className="groupPermission" row>
          {['Read', 'Write', 'Execute'].map((perm, index) => (
            <Tooltip key={perm} title={`Group ${perm}`}>
              <FormControlLabel control={<Checkbox name={`group${perm}`} checked={checked[`group${perm}`]} onChange={handleChange} />} label={perm} />
            </Tooltip>
          ))}
        </FormGroup>

        <Typography variant="h6" align="center">Others</Typography>
        <FormGroup className="otherPermission" row>
          {['Read', 'Write', 'Execute'].map((perm, index) => (
            <Tooltip key={perm} title={`Others ${perm}`}>
              <FormControlLabel control={<Checkbox name={`others${perm}`} checked={checked[`others${perm}`]} onChange={handleChange} />} label={perm} />
            </Tooltip>
          ))}
        </FormGroup>

        <TextField
          id="numberPermission"
          label="Numeric Permission"
          value={numberFieldValue}
          onChange={handleNumberChange}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!numberError}
          helperText={numberError}
        />
        <TextField
          id="textPermission"
          label="Text Permission"
          value={textFieldValue}
          onChange={handleTextChange}
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!textError}
          helperText={textError}
        />

        <Button variant="contained" color="primary" onClick={clearFields}>
          Clear
        </Button>
      </Box>
    </Container>
  );
};

export default ChmodCal;
