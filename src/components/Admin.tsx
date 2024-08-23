import React from "react";

const Admin = () => {
  return (
    <div id="admin">
      <div className="admin">
        <div className="container">
          <div className="admin_block">
            <input placeholder="name" type="text" />
            <input placeholder="last name" type="text" />
            <input placeholder="image" type="text" />
            <button className="animated-button">create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
