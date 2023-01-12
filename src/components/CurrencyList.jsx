import CurrencyItem from "./CurrencyItem";
function CurrencyList({ data, searchedData, searchWord }) {
  const Date = data?.lastUpdated
    ?.split("T")
    .splice(0, 1)
    .join("")
    .split("-")
    .reverse()
    .join("-");
  return (
    <div className="flex flex-col gap-2 px-4 container">
      <div className="flex justify-end">
        <div className="text-3xl font-bold mt-8     text-right absolute z-1 ">
          Currency Exchange List - Last Updated {Date}
        </div>
      </div>
      <div className=" mt-28">
        {searchedData &&
          searchedData
            .filter((currency) =>
              currency.currency?.toLowerCase().includes(searchWord.toLowerCase())
            )
            .map((item, index) => {
              return <CurrencyItem item={item} key={index} />;
            })}

      </div>
    </div>
  );
}

export default CurrencyList;
