import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function NotAvailable({ customStyling, text, navigateBack }) {
  const navigate = useNavigate();
  return (
    <>
      {navigateBack && <div className="back">
        <BsArrowLeft onClick={() => navigate(-1)} />
      </div>}
      <h1 className="not-available" style={{ ...customStyling }}>{text}</h1>
      <style>
        {`
          .back {
              position: absolute;
              padding: 2rem;
              z-index: 1;
              svg {
                font-size: 2rem;
                cursor: pointer;
              }
          }
          
          .not-available {
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              width: 100%;
              padding: 0px 16px;
              font-size: 18.5px;
              font-weight: 500;
            } 
        `}
      </style>
    </>
  );
}