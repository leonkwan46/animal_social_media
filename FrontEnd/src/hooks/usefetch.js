/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, headers, username = "") => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      let newURL = url;
      if (username) {
        newURL += "/others/" + username;
      }
      await axios
        .get(newURL, headers)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
