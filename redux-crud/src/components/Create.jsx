import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(name);
    e.preventDefault();
    if (name === "" && email === "") {
      return;
    }
    dispatch(addUser({ id: users[users.length - 1].id + 1 + 1, name, email }));
    setName("");
    setEmail("");
    navigate("/");
  };
  return (
    <div className="new-user">
      <h1>Add new user</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="please enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="please enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Create;
