import React from "react";

export default function NotAvailable({ text }) {
  return (
    <>
      <h1 className="not-available">{text}</h1>
      <style>
        {`
          .not-available {
              display: flex;
              justify-content: center;
              width: 100%;
              font-size: 18px;
              margin-top: 1rem;
            } 
        `}
      </style>
    </>
  );
}