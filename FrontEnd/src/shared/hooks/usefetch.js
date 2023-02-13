/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useEffect, useState, useRef } from "react";

//arrayofFunc expects set~ of useState
const useFetch = (url, headers, dependency = "") => {
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
          console.log(res.data);
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
