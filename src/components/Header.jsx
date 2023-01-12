
function Header({ setSearchParams }) {
  const handleSearch = (e) => {
    const currency = e.target.value;
    if (currency) {
      setSearchParams({ currency });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="flex fixed  container">
      <div className="fixed px-4 py-8  text-white container mr-auto rounded bg-[#242424] z-1">
        <span className="mr-2">Search</span> <input className=" border rounded" type="text" onChange={(e) => handleSearch(e)} />
      </div>
    </div>
  );
}

export default Header;
