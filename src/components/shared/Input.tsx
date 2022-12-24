import React from 'react';

interface InputProps {
  label?: string;
  type: string;
  name: string;
  onChange?: (e?: any) => void;
  placeholder: string;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  inputClass?: string;
  value?: string;
  defaultValue?: string;
}

function Input(props: InputProps) {
  return (
    <div>
      {props?.label ? (
        <label
          htmlFor={props.label}
          className={props.labelClassName != null ? props.labelClassName : ''}
        >
          {props.label}
        </label>
      ) : null}
      <div className={`relative bg-white w-full ${props?.className}`}>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          {props?.LeftIcon}
        </div>
        <input
          type={props.type}
          id={props.label}
          name={props.name}
          className={`pl-10 py-2 rounded-lg w-full z-[4] text-sm outline-none ${
            props.inputClass != null ? props.inputClass : ''
          }`}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          defaultValue={props.defaultValue}
        />
        {props.RightIcon ? (
          <div className='flex absolute top-[30%] right-3 items-center px-3 z-[10] cursor-pointer'>
            {props?.RightIcon}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Input;
