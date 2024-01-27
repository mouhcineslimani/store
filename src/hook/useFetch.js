import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setErrors(err));
  }, []);
  return [data, setData];
};

export default useFetch;
