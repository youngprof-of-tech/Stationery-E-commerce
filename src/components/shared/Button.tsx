interface ButtonProps {
  name?: string;
  onClick?: (e?: any) => void;
  className?: string;
  disabled?: boolean;
  onLoading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  children?: JSX.Element;
  childrenClassName?: string;
  overlayColor?: string;
  condition?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <>
      <div className='relative'>
        <button
          className={`rounded-lg px-6 py-3 w-40 bg-light-blue text-white text-center cursor-pointer block ${
            props.className != null ? props.className : ''
          }`}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props?.leftIcon}
          {props.onLoading ?? false ? 'Loading...' : props?.name}
          {props?.rightIcon}
        </button>
        {props.children && !!props.condition ? (
          <div className={`absolute z-[7] ${props?.childrenClassName}`}>
            {props.children}
          </div>
        ) : null}
      </div>
      {props.children && !!props.condition ? (
        <div
          className={`${
            props?.overlayColor || 'bg-black/10'
          } w-screen h-screen absolute top-0 left-0 z-[5]`}
          onClick={props.onClick}
        ></div>
      ) : null}
    </>
  );
}

export default Button;
