import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"

function SignUp({ setUserList }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (newUsername && newPassword && newEmail) {
      const newUser = { username: newUsername, password: newPassword, email: newEmail };
      const storedUserList = JSON.parse(localStorage.getItem("userList")) || [];
      storedUserList.push(newUser);
      localStorage.setItem("userList", JSON.stringify(storedUserList));
      setUserList(storedUserList);
      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
      <input type="email" placeholder="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
      <input type="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
      <button onClick={handleCreateAccount}>Sign Up</button>
    </div>
  );
}

export default SignUp;