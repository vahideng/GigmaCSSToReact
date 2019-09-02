import React from 'react';
import classes from './dataField.module.css';

interface IProps {
  dateFieldValue?: number | string;
  placeholder?: string;
  type : string,
  value?: number |string | undefined;
  status?: string;
  errorMessage?: string;
  disabled?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): any;
}

const dateField: React.FC<IProps> = props => {

let showValue = false
  {props.value ? showValue = true : showValue = false} 
  return (
    
      <div data-test="dataFieldWrapper" className={classes.DataFieldWrapper}>
        <input
          className={classes.InputWrapper}
          placeholder ={props.placeholder}
          type={props.type}
          value={showValue ? ('0' + props.dateFieldValue).slice(-2) : undefined}
          onChange={props.onChange}
        />
     
    </div>
  );
};

export default dateField;


