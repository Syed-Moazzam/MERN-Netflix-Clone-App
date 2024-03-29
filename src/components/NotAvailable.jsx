import React from "react";

export default function NotAvailable({ customStyling, text }) {
  return (
    <>
      <h1 className="not-available" style={{ ...customStyling }}>{text}</h1>
      <style>
        {`
          .not-available {
              display: flex;
              justify-content: center;
              width: 100%;
              font-size: 18.5px;
              font-weight: 500;
              margin-top: 1rem;
            } 
        `}
      </style>
    </>
  );
}