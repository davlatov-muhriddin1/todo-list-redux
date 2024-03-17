import React, { useState } from "react";
import { useDispatch } from "react-redux";

function CounterHead() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("bo'sh");
      return;
    }

    const todoValue = {
      name,
      email,
      password,
    };
    dispatch({ type: "ADD", payload: todoValue });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="gap-4">
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      <button className="btn btn-primary">Send</button>
    </form>
  );
}

export default CounterHead;
