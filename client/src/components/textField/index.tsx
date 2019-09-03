import React from 'react';
import './input.scss';

interface IProps {
  labelName?: string;
  placeHolder?: string;
  type?: string;
  value?: string | number;
  status?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const Input: React.FC<IProps> = props => {
  return (
    <div data-test="inputComponent" className="Container">
      {props.labelName ? (
        <p
          data-test="labelInput"
          className={props.status === 'Error' ? `Label LabelError` : `Label`}
        >
          {props.labelName}
        </p>
      ) : null}

      <input
        disabled={props.disabled}
        className={
          props.status ? `InputWrapper Error` : `InputWrapper`
        }
        placeholder={props.placeHolder}
        type={props.type}
        value={props.value}
      />
      {props.status === 'Error' ? (
        <p data-test="errorMessage" className={`Label LabelError ErrorMessage`}>
          {props.errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
