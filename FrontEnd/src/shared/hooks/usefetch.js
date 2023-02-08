/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, headers, dependency = null) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(url, headers)
        .then((res) => {
          setData(res.data);
          console.log("useFetch called");
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getData();
  }, [dependency]);

  return { data, loading, error };
};

export default useFetch;
