import React from "react";
import img from "@/image/butterfly.jpg";

interface Todo {
  src: string;
}

const Header = () => {
  return (
    <div id="header">
      <div className="header">
        <div className="container">
          <div>
            <h1>Todo List</h1>
            <h1></h1>
            {/* <img src={img} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
