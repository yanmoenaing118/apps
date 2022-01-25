import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  return {
    count,
    inc,
  };
}
