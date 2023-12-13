import React from "react";
import "./GroupMembersList.css";
const GroupMembersList = ({ members }) => {
  return (
    <div className="group-members-container">
      <h2>Group Members</h2>
      <ul className="members-list">
        {members.map((member, index) => (
          <li key={index}>
            <img
              src={member.avatar}
              alt={`Avatar of ${member.name}`}
              className="avatar"
            />
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembersList;
