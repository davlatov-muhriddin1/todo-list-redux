import React from "react";
import CounterHead from "./CounterHead";
import CounterBody from "./CounterBody";
import { useSelector } from "react-redux";
import Empty from "./Empty";

function Counter() {
  const { todos } = useSelector((state) => state);
  return (
    <div>
      <CounterHead />
      {todos.length ? <CounterBody /> : <Empty />}
    </div>
  );
}

export default Counter;
