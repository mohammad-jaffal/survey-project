import React from "react";
import Button from "./Button";

const PageTitle = ({isAdmin, text, onClick }) => {
  return (
    <div
      className="page-title-container"
      onClick={onClick}
    >
      <p className="page-title">
        {text}
      </p>
      {
      isAdmin ? <Button
      text="Create"
      /> :""}
    </div>
  );
};

export default PageTitle;
