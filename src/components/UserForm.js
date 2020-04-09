import React, { useState, useEffect } from "react";

function UserForm(props) {
  const { submitUser, currentUserId } = props;

  const [changeUser, setChangeUser] = useState("");

  //   console.log(submitUser);
  //   console.log(currentUserId);

  const handleChange = (event) => {
    setChangeUser(event.target.value);
  };

  const handleClick = (event) => {
    submitUser(changeUser);
  };

  return (
    <div>
      <input
        placeholder='userId'
        value={changeUser}
        name='userId'
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit UserId</button>
    </div>
  );
}

export default UserForm;
