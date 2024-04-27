import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function NotAvailable({ customStyling, text, navigateBack }) {
  const navigate = useNavigate();
  return (
    <>
      {navigateBack && <div className="back-btn-not-available">
        <BsArrowLeft onClick={() => navigate(-1)} />
      </div>}
      <h1 className="not-available" style={{ ...customStyling }}>{text}</h1>
      <style>
        {`
          .back-btn-not-available {
              position: fixed;
              left: 28px;
              top: 34px;
              z-index: 5;
              svg {
                font-size: 2.3rem;
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
              font-size: 20px;
              font-weight: 500;
            } 
        `}
      </style>
    </>
  );
}