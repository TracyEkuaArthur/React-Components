import React from "react";

export const Counter = () => {
  const [value, setValue] = React.useState(0);

  const handleIncrease = () => {
    setValue((preValue) => preValue + 1);
  };
  const handleDecrease = () => {
    setValue((preValue) => preValue - 1);
  };


  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>    
    </div>
  );
};
 




