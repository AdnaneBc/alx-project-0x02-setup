import React from "react";
import { UserProps } from "../../interfaces/index";

const UserCard = ({ user }: { user: UserProps }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserCard;
