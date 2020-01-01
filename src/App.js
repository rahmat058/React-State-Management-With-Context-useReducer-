import React from "react";
import { CountProvider } from "./provider/count-provider";
import Counter from "./components/Counter";

function App() {

  return (
    <CountProvider>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Context + Hooks = Forget Redux</h2>

            <Counter />
          </div>
        </div>
      </div>
    </CountProvider>
  );
}

export default App;
