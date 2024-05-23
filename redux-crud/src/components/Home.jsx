import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate()
  return (
    <div className="home">
      <button onClick={()=>navigate("/create")}>create</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
