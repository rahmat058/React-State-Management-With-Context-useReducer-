import React, { useContext } from "react";
import { CountContext } from "../provider/count-provider";

import Controller from "./Controller";

const Counter = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <div className="card card-body text-center my-3">
        <h3>Count - {count}</h3>
      </div>

      <div className="card card-body text-center">
        <Controller />
      </div>
    </div>
  );
};

export default Counter;
