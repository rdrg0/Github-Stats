import { useEffect, useState } from "react";

export default function useSearch() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    !value && setLoading(false);
    const bounce_time = setTimeout(() => {
      console.log("effect");
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(bounce_time);
    };
  }, [value]);

  return [value, setValue, loading, setLoading];
}
