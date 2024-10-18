import React from 'react'
type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?: ButtonType;
    active?:boolean
    className:string
  }

function BtnCategory(props:Props) {
    return (
        <button
          className={`${props.className} ...`}
          type={props?.type}
          onClick={props?.onClick}
        >
          {props.children}
        </button>
      );
}

export default BtnCategory