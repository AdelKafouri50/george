import { useState, useEffect } from "react";
import { fetcher } from "../utils/fetcher";

export function useData() {
  const [data, SetData] = useState({});
  const [searchedData, SetSearchedData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const getData = async () => {
    SetLoading(true);
    const data = await fetcher("/data/data.json", "GET");
    SetData(data);
    SetSearchedData(data?.fx);
    SetLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, SetData, searchedData, loading };
}
