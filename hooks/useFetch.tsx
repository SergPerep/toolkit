import { useEffect, useState } from "react";

const useFetch = <T = unknown,>(url: string) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const getFetch = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const dataJSON = await response.json();
        if (response.status === 200) {
          setData(dataJSON);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFetch();
  }, [url]);
  return { data, setData, isLoading, error };
};

export default useFetch;
