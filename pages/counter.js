import useCounter from "../lib/useCounter";

export default function CounterPage() {
  const { count, inc } = useCounter();

  return <h1>count {count}</h1>;
}
