interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export default function Counter({ count, onIncrement, onDecrement, onReset }: CounterProps) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
