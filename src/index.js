import React from "react";
import ReactDOM from "react-dom";

const Book = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => {
  return <h1>Hii, I am Priyal</h1>;
};

const Message = () => {
  return <h3>This is a Message</h3>;
};

ReactDOM.render(<Book />, document.getElementById("root"));
