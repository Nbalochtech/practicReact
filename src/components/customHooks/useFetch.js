import { useState, useEffect } from "react";

const useFetch = (url, search = "") => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const apiData = await fetch(url + search);
      const res = await apiData.json();
      setData(res);
    }
    getData();
  }, [url]);
  return [data];
};

export default useFetch;
