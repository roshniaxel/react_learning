import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(undefined);
    setError(false);
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);
  return { data, error, loading };
}
