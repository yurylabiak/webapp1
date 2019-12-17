import { hot } from "react-hot-loader/root";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const title = "123467afsdfghjk";

  return (
    <div>
      <form>
        <h1>{title}</h1>
        <input value={count} readOnly />
        <button onClick={handleClick} type="button">
          +
        </button>
      </form>
    </div>
  );
};

export default hot(App);
