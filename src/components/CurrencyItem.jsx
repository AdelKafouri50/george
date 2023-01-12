function CurrencyItem({ item }) {
    const flag = item.currency.toLowerCase().slice(0,2)
    console.log(item.exchangeRate?.sell)
  return (
    <div className="flex gap-2 justify-between w-full">
      {item.nameI18N && item.exchangeRate && 
      <div className="flex gap-2 justify-between w-full mb-10 items-center">
        <div className="flex gap-4 items-center">
            <img src={`/assets/flags/${flag}.png`} alt="" />
            <div>{item?.nameI18N}</div>
        </div>
      <div>
        <div className="flex gap-4">
        <div>{item?.currency} = </div>

            {item.exchangeRate &&
            Math.round((1 / item?.exchangeRate?.sell) * 100) / 100 + " EUR"}
            {!item.exchangeRate && "Data unavailable" + " EUR"}
        </div>
      </div>
      </div>}
    </div>
  );
}

export default CurrencyItem;
