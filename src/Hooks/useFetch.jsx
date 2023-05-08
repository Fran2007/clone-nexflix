import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.jsonData();
      setData((prevData) => [...prevData, ...jsonData.production_companies]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      fetchData();
    }, []);

    return { data, loading, fetchData };
  };
};
