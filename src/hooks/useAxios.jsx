import axios from "axios";
import { useEffect, useState } from "react";

const UseAxios = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(param);
      setResponse(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {});

  useEffect(() => {
    fetchData(param);
  }, []);

  return { response, loading, error };
};

export default UseAxios;
