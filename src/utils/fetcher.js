export const fetcher = async (url, type) => {
  switch (type) {
    case "GET":
      try {
        const res = await fetch(url, {
          method: "GET",
        });
        const json = await res.json();
        console.log(json);
        return json;
      } catch (error) {
        console.log(error);
      }

      break;
    case "POST":
      try {
        const res = await fetch(url, {
          method: "POST",
        });
        const json = await res.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    default:
      break;
  }
};
