import React, { useContext } from "react";
import { CountContext } from "../provider/count-provider";

const Controller = () => {
  const { increment, decrement, reset } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => increment()} className="btn btn-primary mx-2">
        Increment
      </button>
      <button onClick={() => decrement()} className="btn btn-danger mx-2">
        Decrement
      </button>
      <button onClick={() => reset()} className="btn btn-warning mx-2">
        Reset
      </button>
    </div>
  );
};

export default Controller;
