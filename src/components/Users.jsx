import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  clearUsers,
  fetchUsers,
  selectUsers,
} from "../redux-toolkit/features/users/slice";

const Users = () => {
  const data = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Users</h1>

      {!data.users.length ? (
        <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
      ) : (
        <button onClick={() => dispatch(clearUsers())}>clear</button>
      )}

      {data.loading && <h3 style={{ color: "skyblue" }}>Loading...</h3>}

      {data.error && <h3 style={{ color: "red" }}>{data.error}</h3>}

      {!data.loading && !data.error && data.users.length ? (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;
