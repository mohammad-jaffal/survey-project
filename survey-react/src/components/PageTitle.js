import React from "react";
import Button from "./Button";

const PageTitle = ({isAdmin, text, btn_text, onClick }) => {
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
      text={btn_text}
      onClick={onclick}
      /> :""}
    </div>
  );
};

export default PageTitle;
