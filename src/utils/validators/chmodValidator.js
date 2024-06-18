// utils/validators.js

// import { checkboxClasses } from "@mui/material";

const matching = {
  '0': '---',
  '1': '--x',
  '2': '-w-',
  '3': '-wx',
  '4': 'r--',
  '5': 'r-x',
  '6': 'rw-',
  '7': 'rwx'
};
export const isNumberValid = (value) => {
    const pattern = /^[0-7]*$/;
    if (!pattern.test(value)) {
      return false;
    }
  
    return value.length <= 3;
  };
  
  export const isTextValid = (value) => {
    for (let i = 0; i <= 8; i ++) {
      if (((i === 0 || i === 3 || i === 6) && !['r', '-', ''].includes(value.charAt(i))) ||
          ((i === 1 || i === 4 || i === 7) && !['w', '-', ''].includes(value.charAt(i))) ||
          ((i === 2 || i === 5 || i === 8) && !['x', '-', ''].includes(value.charAt(i)))) {
        return false;
      }
    }
  
    return value.length <= 9;
  };

  const isDigit=(read,write,execute)=>{
    return (read ? 4 : 0) + (write ? 2 : 0) + (execute ? 1 : 0);
  }

export const checkboxToChmodNumber=(newChecked) => {
  const { ownerRead, ownerWrite, ownerExecute, groupRead, groupWrite, groupExecute, othersRead, othersWrite, othersExecute } = newChecked;

  const owner = isDigit(ownerRead, ownerWrite, ownerExecute);
  const group = isDigit(groupRead, groupWrite, groupExecute);
  const others = isDigit(othersRead, othersWrite, othersExecute);

  return `${owner}${group}${others}`;
}

  const digitToString=(char)=>{
    return matching[char]
  }

export const chmodNumberToString=(value)=>{
  return digitToString(value.charAt(0)) + digitToString(value.charAt(1))+ digitToString(value.charAt(2))
}

export const chmodStringToCheckboxes = (value)=>{
  return {
    'ownerRead': value.charAt(0) === 'r',
    'ownerWrite': value.charAt(1) === 'w',
    'ownerExecute': value.charAt(2) === 'x',
    'groupRead': value.charAt(3) === 'r',
    'groupWrite': value.charAt(4) === 'w',
    'groupExecute': value.charAt(5) === 'x',
    'othersRead': value.charAt(6) === 'r',
    'othersWrite': value.charAt(7) === 'w',
    'othersExecute': value.charAt(8) === 'x',
}
}