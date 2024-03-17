import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterBody() {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteItem = (id) => dispatch({ type: "DELETE", payload: id });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{todo.name}</td>
              <td>{todo.email}</td>
              <td>{todo.password}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(idx + 1)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CounterBody;
