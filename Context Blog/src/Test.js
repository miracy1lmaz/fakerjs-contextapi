import { useState } from "react";

function SlowComponent() {
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

export default function Test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>increase: {count}</button>
      <SlowComponent />
    </div>
  );
}
