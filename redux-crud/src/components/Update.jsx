import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../reducers/UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id === parseInt(id));
  const uname = existingUser[0].name;
  const uemail = existingUser[0].email;
  const uid = existingUser[0].id;

  const [name, setName] = useState(uname);
  const [email, setEmail] = useState(uemail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id: uid, name: name, email: email }));
    navigate("/");
  };

  return (
    <div className="new-user">
      <h1>Edit user</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={uname}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={uemail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
