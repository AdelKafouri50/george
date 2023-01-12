import CurrencyList from "../components/CurrencyList";
import Header from "../components/Header";
import { useData } from "../hooks/useData";
import { useSearchParams } from "react-router-dom";

function Home() {
  const { data, loading, searchedData } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get("currency") || "";

  return (
    <div className="container m-auto text-3xl relative">
      <Header setSearchParams={setSearchParams} />
      {loading ? (
        "loading..."
      ) : (
        <CurrencyList
          searchWord={searchWord}
          data={data}
          searchedData={searchedData}
        />
      )}
    </div>
  );
}

export default Home;
