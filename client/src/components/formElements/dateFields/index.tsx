import React from 'react';
import LineBetween from '../../Ui/line';
import DataField from './dataField';
import classes from './dataField.module.css';
interface IProps {
  dateFieldValue?: number | string;
  placeHolder?: string;
  onChangehandler(e: React.ChangeEvent<HTMLInputElement>): any;
  value?: number;
  status?: string;
  errorMessage?: string;
  disabled?: boolean; 
}

const dateField: React.FC<IProps> = props => {
  return (
    <div data-test="dataFieldContainer" className={classes.Container}>
      <DataField placeholder="DD" onChange={props.onChangehandler} type="text"/>
      <LineBetween/>
      <DataField placeholder="MM" onChange={props.onChangehandler} type="text"/>
    <LineBetween/>
      <DataField placeholder="YY" onChange={props.onChangehandler} type="text"/>
    </div>
  );
};

export default dateField;
