import { useCallback, useState } from "react";

export const useScroll = (maxLength: number, initialValue: number) => {
  const [count, setCount] = useState(
    Number(localStorage.getItem("start")) || initialValue
  );

  const increment = useCallback(() => {
    setCount((prev) => (prev > maxLength ? prev : prev + 1));
    localStorage.setItem("start", String(count));
  }, [maxLength, count]);

  const decrement = useCallback(() => {
    setCount((prev) => (prev < 1 ? prev : prev - 1));
    localStorage.setItem("start", String(count));
  }, [count]);

  return { count, increment, decrement };
};
