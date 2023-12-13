import React from "react";
import GroupMembersList from "./GroupMemberList";

const App = () => {
  const members = [
    { name: "John Doe", avatar: "john-avatar.jpg" },
    { name: "Jane Smith", avatar: "jane-avatar.jpg" },
    { name: "John Doe", avatar: "john-avatar.jpg" },
    { name: "Jane Smith", avatar: "jane-avatar.jpg" },
    { name: "John Doe", avatar: "john-avatar.jpg" },
    { name: "Jane Smith", avatar: "jane-avatar.jpg" },
    { name: "John Doe", avatar: "john-avatar.jpg" },
    { name: "Jane Smith", avatar: "jane-avatar.jpg" },
    { name: "John Doe", avatar: "john-avatar.jpg" },
    { name: "Jane Smith", avatar: "jane-avatar.jpg" },
  ];

  return (
    <div>
      <h1>Group Information</h1>
      <GroupMembersList members={members} />
    </div>
  );
};

export default App;
