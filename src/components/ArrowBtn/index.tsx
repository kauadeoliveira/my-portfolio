import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './style.scss';

interface ArrowBtnType {
  direction: 'up' | 'right' | 'down' | 'left';
  label: string;
  type?: 'button' | 'reset' | 'submit' 
  onClick?: () => void;
}
export default function ArrowBtn({ direction, label, onClick, type }: ArrowBtnType) {
  return(
    <button id="arrow-btn-container" type={type} onClick={onClick}>
      <div className="btn-left">
        <AiOutlineArrowUp className={direction} />
      </div>
      <span className="label">
        {label}
      </span>
      <div className="btn-right">
        <AiOutlineArrowUp className={direction} />
      </div>
    </button>
  )
}